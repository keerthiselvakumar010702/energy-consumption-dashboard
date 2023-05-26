import { SetStateAction } from "react";

export type Data = {
    deviceName:string,
    startDate?: Date|any;
  endDate?: Date|any;
  };
  export type Date={
    startDate:Date|any,
    endDate:Date|any,
    handleStartDate: (value: Date ) => void;
    handleEndDate: (value: Date ) => void;
  };
  export type Device={
    deviceName:string,
    handleDropdown: (value: SetStateAction<string>) => void;
  };
  export type calendar={
    handleStartDate: (value: SetStateAction<string>) => void;
  }
  export type Label_mapping={
    label:string
  }
