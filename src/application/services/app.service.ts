import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService{
  private startTime : Date;

  constructor(){
    this.startTime = new Date();
  }

  getHealty() : string {
    const currentTime = new Date();
    const uptimeMilliseconds = currentTime.getTime() - this.startTime.getTime();
    const uptimeSeconds = uptimeMilliseconds / 1000;
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    return (
      'Hello there!' + 
      '<br>' + 
      `${hours} hours, ${minutes} minutes, and ${seconds} seconds`
    );  
  }
}
