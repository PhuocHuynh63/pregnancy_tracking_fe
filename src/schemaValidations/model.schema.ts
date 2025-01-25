import { z } from "zod";

export const BackendResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
    z.object({
        statusCode: z.number().optional(),
        message: z.string().optional(),
        error: z.string().optional(),
        data: dataSchema.optional(),
    }).refine(
        (obj) =>
            (obj.statusCode === 201 && obj.data !== undefined && obj.error === undefined) ||
            (obj.statusCode !== 201 && obj.data === undefined && obj.error !== undefined),
        {
            message: "Invalid response structure",
            path: [],
        }
    );