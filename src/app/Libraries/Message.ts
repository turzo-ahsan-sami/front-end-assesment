
export class Message{

    public static SuccessMessage : string = "";
    public static ErrorMessage : any = null;
    public static Warning : string = "";
    public static ClearAlert : boolean = false;
   

    public static setSuccessMessage(Message: string = "Successfully Saved"){
        this.SuccessMessage = Message;
    }

    public static setApproveSuccess(Message: string = "Successfully Approved"){
        this.SuccessMessage = Message;
    }

    public static setDeleteSuccess(Message: string = "Successfully Deleted"){
        this.SuccessMessage = Message;
    }
    
    public static setUpdateSuccess(Message: string = "Successfully Updated"){
        this.SuccessMessage = Message;
    }
   
    

    public static setCustomErrorMessage(Message: string, IsWarning: boolean = true){
        if(IsWarning) this.Warning = Message;
        else this.ErrorMessage = { "message" : Message };        
    }


    public static clear(){
        this.ClearAlert = true;
        this.SuccessMessage = "";
        this.ErrorMessage = null;
        this.Warning = "";
          
    }

    public static setErrorMessage(Message: string){
        this.ErrorMessage = { "message" : "Unable to process the request. Please try again. " + Message };         
    }

        
}


