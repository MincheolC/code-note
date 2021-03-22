import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  name: string,
}

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>): void => {
  res.status(200).json({ name: 'John Doe' })
}
