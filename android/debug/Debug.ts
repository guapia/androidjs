namespace android{
    export class Debug{
        static assert(flg:boolean=false,log?:string){
            if(!flg){
                let err:Error = new Error();
                throw log+"\n"+err.stack;
            }
        }
        static log(log:any){
            console.log(log);
        }
    }
}