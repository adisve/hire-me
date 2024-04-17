import { SuccessResponse, ErrorResponse, Response } from "../domain/types";
import { createRequestURL, get, post } from "./axios/net_manager";

const call = async <T>(url: string, requestCallback: any): Promise<T> => {
  try {
    const response = await requestCallback(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Request timed out");
  }
};

export const fetchAllChildren = async (): Promise<Response> => {
  const url = createRequestURL("api/daycare/tablet/group", {
    groupId: "86413ecf-01a1-44da-ba73-1aeda212a196",
    institutionId: "dc4bd858-9e9c-4df7-9386-0d91e42280eb",
  });
  return await call<Response>(url, get);
};

export const checkIn = async (
  childId: string,
  pickupTime: string
): Promise<SuccessResponse | ErrorResponse> => {
  const url = createRequestURL(`api/v2/children/${childId}/checkins`, {
    pickupTime: pickupTime,
  });
  return await call<SuccessResponse | ErrorResponse>(url, post);
};

export const checkOut = async (
  childId: string
): Promise<SuccessResponse | ErrorResponse> => {
  const url = createRequestURL(`api/v2/children/${childId}/checkout`, {});
  return await call<SuccessResponse | ErrorResponse>(url, post);
};
