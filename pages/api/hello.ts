import { StatusCodes } from 'http-status-codes';

import { ResponseBody } from 'types/api/response';
import { withHandler } from 'utils/server/handler';

import type { NextApiRequest, NextApiResponse } from 'next';

interface GetResponseData {
  name: string;
}

const GET = async (req: NextApiRequest, res: NextApiResponse<ResponseBody<GetResponseData>>) => {
  res.status(StatusCodes.OK).json({
    code: '0000',
    data: {
      name: 'John Doe',
    },
  });
};

interface PostResponseData {
  name: string;
}

const POST = async (req: NextApiRequest, res: NextApiResponse<ResponseBody<PostResponseData>>) => {
  res.status(StatusCodes.CREATED).json({
    code: '0000',
    data: {
      name: 'John Doe',
    },
  });
};

export default withHandler({ GET, POST });
