import { Color } from './Color';
import { HorizontalAlignment } from './HorizontalAlignment';
import { IParagraphProperties } from './IParagraphProperties';
import { ITextProperties } from './ITextProperties';
import { PageBreak } from './PageBreak';
import { ParagraphProperties } from './ParagraphProperties';
import { Style } from './Style';
import { StyleFamily } from './StyleFamily';
import { TabStop } from './TabStop';
import { TabStopType } from './TabStopType';
import { TextProperties } from './TextProperties';
import { TextTransformation } from './TextTransformation';
import { Typeface } from './Typeface';

export class ParagraphStyle extends Style implements IParagraphProperties, ITextProperties {
  private paragraphProperties: ParagraphProperties;
  private textProperties: TextProperties;

  public constructor (name: string = Style.UNNAMED) {
    super(name, StyleFamily.Paragraph);

    this.paragraphProperties = new ParagraphProperties();
    this.textProperties = new TextProperties();
  }

  // paragraph properties

  /** @inheritdoc */
  public setHorizontalAlignment (horizontalAlignment: HorizontalAlignment): ParagraphStyle {
    this.paragraphProperties.setHorizontalAlignment(horizontalAlignment);

    return this;
  }

  /** @inheritdoc */
  public getHorizontalAlignment (): HorizontalAlignment {
    return this.paragraphProperties.getHorizontalAlignment();
  }

  /** @inheritdoc */
  public setKeepTogether (keepTogether = true): ParagraphStyle {
    this.paragraphProperties.setKeepTogether(keepTogether);

    return this;
  }

  /** @inheritdoc */
  public getKeepTogether (): boolean {
    return this.paragraphProperties.getKeepTogether();
  }

  /** @inheritdoc */
  public setPageBreak (pageBreak: PageBreak): ParagraphStyle {
    this.paragraphProperties.setPageBreak(pageBreak);

    return this;
  }

  /** @inheritdoc */
  public getPageBreak (): PageBreak {
    return this.paragraphProperties.getPageBreak();
  }

  /** @inheritdoc */
  public addTabStop (position: number, type: TabStopType): TabStop | undefined;

  /** @inheritDoc */
  public addTabStop (tabStop: TabStop): TabStop | undefined;
  public addTabStop (arg1: number | TabStop, type = TabStopType.Left): TabStop | undefined {
    return this.paragraphProperties.addTabStop(arg1 as any, type);
  }

  /** @inheritdoc */
  public getTabStops (): TabStop[] {
    return this.paragraphProperties.getTabStops();
  }

  /** @inheritdoc */
  public clearTabStops (): ParagraphStyle {
    this.paragraphProperties.clearTabStops();

    return this;
  }

  // text properties

  /** @inheritDoc */
  public setColor (color: Color | undefined): ParagraphStyle {
    this.textProperties.setColor(color);

    return this;
  }

  /** @inheritDoc */
  public getColor (): Color | undefined {
    return this.textProperties.getColor();
  }

  /** @inheritDoc */
  public setFontName (name: string): ParagraphStyle {
    this.textProperties.setFontName(name);

    return this;
  }

  /** @inheritDoc */
  public getFontName (): string | undefined {
    return this.textProperties.getFontName();
  }

  /** @inheritDoc */
  public setFontSize (size: number): ParagraphStyle {
    this.textProperties.setFontSize(size);

    return this;
  }

  /** @inheritDoc */
  public getFontSize (): number {
    return this.textProperties.getFontSize();
  }

  /** @inheritDoc */
  public setTextTransformation (transformation: TextTransformation): ParagraphStyle {
    this.textProperties.setTextTransformation(transformation);

    return this;
  }

  /** @inheritDoc */
  public getTextTransformation (): TextTransformation {
    return this.textProperties.getTextTransformation();
  }

  /** @inheritDoc */
  public setTypeface (typeface: Typeface): ParagraphStyle {
    this.textProperties.setTypeface(typeface);

    return this;
  }

  /** @inheritDoc */
  public getTypeface (): Typeface {
    return this.textProperties.getTypeface();
  }
}
