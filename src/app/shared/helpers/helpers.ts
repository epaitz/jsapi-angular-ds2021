export class Helpers {

    public static isNullOrEmpty(value: any[]): boolean {
        return !(value != null && value.length > 0);
    }

    public static isNullOrWhitespace(value: string): boolean {
        return !(value != null && value.trim().length > 0);
    }

    public static isNullOrUndefined(value: any): boolean {
        return (value == null);
    }
}
