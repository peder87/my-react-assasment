export function coinFlip(successCb: () => void): () => Promise<void> {
  return function (): Promise<void> {
    const coinFlip = Math.floor(Math.random() * 2) === 0
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (coinFlip) {
          successCb()
          res()
        }
        rej()
      }, 300)
    })
  }
}

export async function retryPromise<T>(
  promise: () => Promise<T>,
  maxAttempts: number
): Promise<T> {
  try {
    return await promise()
  } catch (e) {
    if (maxAttempts === 1) {
      console.log('fallito ultimo tentativo')
      return Promise.reject(e)
    }
    console.log('fallito tentativo', maxAttempts - 1)
    return retryPromise(promise, maxAttempts - 1)
  }
}
