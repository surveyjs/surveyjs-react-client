import { rest } from 'msw'
import { defaultJSON } from '../models/survey'

export const handlers = [
    rest.get('/api/surveys', (req, res, ctx) => {
        // const { userId } = req.params
        // return res(
        //   ctx.json({
        //     id: userId,
        //     firstName: 'John',
        //     lastName: 'Maverick',
        //   }),
        // )
        return res(
            ctx.json([defaultJSON]),
        )
    })
]