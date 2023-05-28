const API_HOST = process.env.API_HOST

type HttpResponse<T = any> = Response & { data: T }

/**
 * HTTP client to make requests
 */
const fetcher = {
  /**
   * Executes the GET method for the desired `url`.
   * @param url Url to request.
   */
  async get<T = any>(url: string): Promise<HttpResponse<T>> {
    const response = await fetch(API_HOST + url, {
      headers: { Accept: 'application/json' },
    })
    const body = await response.json()
    return { ...response, data: body }
  },

  /**
   * Executes the POST method for the desired `url`.
   *
   * @param url Url to request.
   * @param data Data to send to the request.
   */
  async post<T = any, D = any>(
    url: string,
    data?: D
  ): Promise<HttpResponse<T>> {
    const response = await fetch(API_HOST + url, {
      method: 'POST',
      body: JSON.stringify(data ?? {}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const body = await response.json()
    return { ...response, data: body }
  },

  /**
   * Executes the PUT method for the desired `url`.
   *
   * @param url Url to request.
   * @param data Data to send to the request.
   */
  async put<T = any, D = any>(url: string, data?: D): Promise<HttpResponse<T>> {
    const response = await fetch(API_HOST + url, {
      method: 'PUT',
      body: JSON.stringify(data ?? {}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const body = await response.json()
    return { ...response, data: body }
  },
}

export default fetcher
