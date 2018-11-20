export class Queue<T> {
  _store: T[] = [];
  public push(val: T) {
    this._store.push(val);
  }
  public pop(): T | undefined {
    return this._store.shift();
  }
}

export class Demo{
        
    public val1:number;
    public val2:string;
    
}