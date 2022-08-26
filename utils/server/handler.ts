import { StatusCodes } from 'http-status-codes';

import type { NextApiRequest, NextApiResponse } from 'next';

type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

type HandlerType = { [key in Method]?: (req: NextApiRequest, res: NextApiResponse) => Promise<void> };

export const withHandler = (handlers: HandlerType) => {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      const allowedMethods = Object.keys(handlers).map((method) => method);

      const { GET, POST, DELETE, PUT, PATCH } = handlers;

      switch (req.method) {
        case 'GET':
          if (GET) await GET(req, res);
          break;

        case 'POST':
          if (POST) await POST(req, res);
          break;

        case 'DELETE':
          if (DELETE) await DELETE(req, res);
          break;

        case 'PUT':
          if (PUT) await PUT(req, res);
          break;

        case 'PATCH':
          if (PATCH) await PATCH(req, res);
          break;

        default:
          res.setHeader('Allow', allowedMethods);
          res.status(StatusCodes.METHOD_NOT_ALLOWED).end(`Method ${req.method} Not Allowed`);
      }
    } catch (error) {
      console.log(error);

      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  };
};
