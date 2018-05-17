import { Color } from "./Color";
import { Typeface } from "./Typeface";

/**
 * This class represents the style of some text.
 *
 * It is used to apply formatting to the text content.
 * To format the text of a paragraph either the paragraphs test style must be altered
 * or a new text style is set to the paragraph.
 *
 * @example
 * // alter the text style of a paragraph to use a bold typeface
 * paragraph.getTextStyle().setTypeface(Typeface.Bold);
 *
 * @example
 * // apply the same text style to multiple paragraphs
 * const style = new TextSyle();
 * style.setTypeface(Typeface.Italic);
 * paragraph1.setTextStyle(style);
 * paragraph2.setTextStyle(style);
 *
 * @example
 * // set the font size of a paragraph to 8pt
 * paragraph.getTextStyle().setFontSize(8);
 *
 * @since 0.4.0
 */
export interface ITextStyle {
  /**
   * Sets the font color that will be applied to the text.
   * To reset the color, `undefined` must be given.
   *
   * @param {Color | undefined} color The font color to apply or `undefined` if the default color should be used
   * @since 0.4.0
   */
  setColor(color: Color | undefined): void;

  /**
   * Returns the font color that will be applied to the text or `undefined` if the default color will be used.
   *
   * @returns {Color | undefined} The font color to apply or `undefined` if the default color will be used
   * @since 0.4.0
   */
  getColor(): Color | undefined;

  /**
   * Sets the font size that will be applied to the text.
   *
   * @param {number} size The font size to apply as point value (pt)
   * @since 0.4.0
   */
  setFontSize(size: number): void;

  /**
   * Returns the font size that will be applied to the text.
   *
   * @returns {number} The font size to apply as point value (pt)
   * @since 0.4.0
   */
  getFontSize(): number;

  /**
   * Sets the typeface that will be applied to the text.
   *
   * @param {Typeface} typeface The typeface to apply
   * @since 0.4.0
   */
  setTypeface(typeface: Typeface): void;

  /**
   * Returns the typeface that will be applied to the text.
   *
   * @returns {Typeface} The typeface to apply
   * @since 0.4.0
   */
  getTypeface(): Typeface;
}
