// type checkerFun = (val: unknown) => boolean;
interface checkerFun {
  (val: unknown): boolean;
}

const is: { [type: string]: checkerFun } = {
  bool(val: unknown) {
    return typeof val === "boolean";
  },
  num(val: unknown) {
    return typeof val === "number";
  },
  str(val: unknown) {
    return typeof val === "string";
  },
  fun(val: unknown) {
    return typeof val === "function";
  },
};

export default is;
