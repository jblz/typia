export type IMetadataTag =
    | IMetadataTag.IItems
    | IMetadataTag.IMinItems
    | IMetadataTag.IMaxItems
    | IMetadataTag.IFormat
    | IMetadataTag.IPattern
    | IMetadataTag.ILength
    | IMetadataTag.IMinLength
    | IMetadataTag.IMaxLength
    | IMetadataTag.IType
    | IMetadataTag.IRange
    | IMetadataTag.IMinimum
    | IMetadataTag.IMaximum;
export namespace IMetadataTag {
    /* -----------------------------------------------------------
        ARRAY   
    ----------------------------------------------------------- */
    export interface IItems {
        kind: "items";
        minimum?: ISign;
        maximum?: ISign;
    }

    export interface IMinItems {
        kind: "minItems";
        value: number;
    }

    export interface IMaxItems {
        kind: "maxItems";
        value: number;
    }

    /* -----------------------------------------------------------
        LITERAL
    ----------------------------------------------------------- */
    export interface IFormat {
        kind: "format";
        value: "uuid" | "email" | "url" | "ipv4" | "ipv6";
    }

    export interface IPattern {
        kind: "pattern";
        value: string;
    }

    export interface ILength {
        kind: "length";
        minimum?: ISign;
        maximum?: ISign;
    }

    export interface IMinLength {
        kind: "minLength";
        value: number;
    }

    export interface IMaxLength {
        kind: "maxLength";
        value: number;
    }

    /* -----------------------------------------------------------
        NUMERIC
    ----------------------------------------------------------- */
    export interface IType {
        kind: "type";
        value: "int" | "uint";
    }

    export interface IRange {
        kind: "range";
        minimum?: ISign;
        maximum?: ISign;
    }

    export interface IMinimum {
        kind: "minimum";
        value: number;
    }

    export interface IMaximum {
        kind: "maximum";
        value: number;
    }

    /* -----------------------------------------------------------
        MISCELLANEOUS
    ----------------------------------------------------------- */
    export interface ISign {
        include: boolean;
        value: number;
    }
}
