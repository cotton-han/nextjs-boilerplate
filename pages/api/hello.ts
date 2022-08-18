import { withHandler } from 'utils/server/withHandler';

import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseDataType {
  name: string;
}

// /api/hello
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseDataType>) => {
  if (req.method === 'GET') {
    // 데이터베이스에서 데이터 가져오기
    res.status(200).json({ name: 'John Doe' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withHandler({ handler });
