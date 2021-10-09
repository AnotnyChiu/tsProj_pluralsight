class Utility {
    static getInputValue(elementId: string): string {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
        // getElementById 可能會是null，所以這邊要assertion是HTMLInputElement
    
        return inputElement.value
    }
}
