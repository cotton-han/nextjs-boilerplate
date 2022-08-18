import { NextApiRequest, NextApiResponse } from 'next';

interface ConfigType {
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

export const withHandler = ({ handler }: ConfigType) => {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);

      res.status(500).json({ error });
    }
  };
};
