export function millisToReadableMinAndSec(millis: number) {
    let minutes: number = Math.floor(millis / 60000);
    const seconds: number = Math.round((millis % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds.toString();
}
