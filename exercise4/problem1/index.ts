class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    compareAge(anotherPerson: Person) {
        return (
          anotherPerson.name
          + ' is '
          + (
              (anotherPerson.age > this.age) ? 'older than'
              : (anotherPerson.age < this.age) ? 'younger than'
              : 'the same age as'
          )
          + ' me.'
        );
    }
}

export default Person;
