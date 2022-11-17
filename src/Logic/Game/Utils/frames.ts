
export const pathToImages = '/src/assets/images';


//todo convert frames to gif!

// hearts
export   const  nextCFrame = (frame: number = 0):number => (frame + 1) % 8;
export   const  nextHFrame = (frame: number = 0):number => (frame + 1) % 4;

