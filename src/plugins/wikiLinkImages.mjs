import { findAndReplace } from "mdast-util-find-and-replace";
import { u } from "unist-builder";

export default function wikiLinkImages() {
  return function (tree) {
    findAndReplace(tree, [
      /!\[\[(.*)\]\]/g,

      function (_, $1) {
        const [path, alt] = $1.split("|");

        return u("image", { url: "@assets/" + path, alt: path ?? alt });
      },
    ]);
  };
}
