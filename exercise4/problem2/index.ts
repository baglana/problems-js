class Name {
    firstName: string;
    lastName: string;
    fullName: string;
    initials: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = getCapitalized(firstName);
        this.lastName = getCapitalized(lastName);
        this.fullName= `${this.firstName} ${this.lastName}`;
        this.initials = this.firstName.charAt(0)
                        + '.'
                        + this.lastName.charAt(0);
    }
}

function getCapitalized(str: string) {
    return str.charAt(0).toUpperCase()
          + str.slice(1).toLowerCase();
}

export default Name;
