import { OdfElementName } from "../OdfElementName";

/**
 * Utility class for dealing with styles.
 *
 * @since 0.4.0
 */
export class StyleHelper {
  /**
   * Returns the `automatic-styles` element of the document.
   * If there is no such element yet, it will be created.
   *
   * @param {Document} document The XML document
   * @returns {Element} The documents `automatic-styles` element
   * @since 0.4.0
   */
  public static getAutomaticStylesElement(document: Document): Element {
    const rootNode = document.firstChild as Element;

    const automaticStylesElements = rootNode.getElementsByTagName(OdfElementName.OfficeAutomaticStyles);

    if (automaticStylesElements.length === 0) {
      return this.createAutomaticStylesElement(document);
    }

    return automaticStylesElements[0];
  }

  /**
   * Creates and returns the `automatic-styles` element for the document.
   *
   * @param {Document} document The XML document
   * @returns {Element} The newly created `automatic-styles` element
   * @since 0.4.0
   */
  private static createAutomaticStylesElement(document: Document): Element {
    const rootNode = document.firstChild as Element;
    rootNode.setAttribute("xmlns:style", "urn:oasis:names:tc:opendocument:xmlns:style:1.0");
    rootNode.setAttribute("xmlns:fo", "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0");

    const automaticStyles = document.createElement(OdfElementName.OfficeAutomaticStyles);
    rootNode.insertBefore(automaticStyles, rootNode.firstChild);

    return automaticStyles;
  }
}
