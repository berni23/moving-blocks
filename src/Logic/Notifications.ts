export const warning = (message: string, $q:any) => $q.notify({
    message: message,
    color: 'red',
    position: 'top'
})


export const wellDone = (message: string, $q: any) => $q.notify({
    message: message,
    color: 'green',
    position: 'top'
})
