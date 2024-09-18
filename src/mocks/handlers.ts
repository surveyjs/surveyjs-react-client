import { http, HttpResponse } from 'msw'
import { createSurvey, getResults, getSurvey, getSurveys, postResult, removeSurvey, updateSurvey } from '../models/in-memory-storage'
import { apiBaseAddress } from '../models/survey'

export const handlers = [
    http.get(apiBaseAddress + '/surveys', ({ request, params, cookies }) => {
        // const { userId } = req.params
        // return res(
        //   ctx.json({
        //     id: userId,
        //     firstName: 'John',
        //     lastName: 'Maverick',
        //   }),
        // )
        return HttpResponse.json(getSurveys())
    }),
    http.get(apiBaseAddress + '/getActive', ({ request, params, cookies }) => {
        return HttpResponse.json(getSurveys())
    }),
    http.get(apiBaseAddress + '/create', ({ request, params, cookies }) => {
        return HttpResponse.json(createSurvey())
    }),
    http.get(apiBaseAddress + '/delete', ({ request, params, cookies }) => {
        const id = request.url.search('id');
        // const id = req.url.searchParams.get('id')
        removeSurvey(id.toString());
        return HttpResponse.json({ id })
    }),
    http.get(apiBaseAddress + '/getSurvey', ({ request, params, cookies }) => {
        const surveyId = request.url.search('surveyId');
        return HttpResponse.json(getSurvey(surveyId.toString()))
    }),
    http.post(apiBaseAddress + '/changeJson', ({ request, params, cookies }) => {
        const { id, json } = request.body as Record<string, any>
        updateSurvey(id as string, json)
        return HttpResponse.json({ id, json })
    }),
    http.post(apiBaseAddress + '/post', ({ request, params, cookies }) => {
        const { postId, surveyResult } = request.body as Record<string, any>
        postResult(postId as string, surveyResult)
        return HttpResponse.json({})
    }),
    http.get(apiBaseAddress + '/results', ({ request, params, cookies }) => {
        const postId = request.url.search('postId');
        return HttpResponse.json({ id: postId, data: getResults(postId.toString()) })
    })
]