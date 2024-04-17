// Generated with https://www.quicktype.io

export interface Response {
  children: Child[];
}

export interface Child {
  childId: string;
  institutionId: string;
  groupId: string;
  createdTime: Date;
  name: Name;
  birthday: Date;
  homeAddress: null;
  extraInfo: string;
  language: string;
  nationality: string;
  birthplace: string;
  gender: string;
  startDate: Date;
  endDate: null;
  leavingReason: null;
  isTestChild: boolean;
  famlyId: string;
  genderId: number;
  localStartDate: Date;
  localEndDate: string;
  image: Image;
  onApp: boolean;
  tagIds: any[];
  groupTitle: string;
  isSleeping: boolean;
  naps: any[];
  hasVacation: boolean;
  isSick: boolean;
  isAbsent: boolean;
  leaves: any[];
  onBus: boolean;
  onTrip: boolean;
  statuses: any[];
  checkins: Checkin[];
  checkedIn: boolean;
  checkinTime: Date;
  pickupTime: Date;
  pickupRelationId: string;
  pickupName: string;
  keyWorkers: any[];
  actions: any[];
  security2: boolean;
  mealRegistrations: any[];
  mealRegistrationsToday: number;
  movingTo: null;
  localMovingToDate: string;
  roles2: any[];
  deletion: Deletion;
  conversation: Conversation;
  attending: null;
  behaviors: Behavior[];
  statusRegistrations: any[];
}

export interface Behavior {
  id: string;
  payload: Payload | null;
}

export interface Conversation {
  participants: null;
}

export interface Deletion {
  canDelete: boolean;
  strategy: string;
  canExport: boolean;
}

export interface Payload {
  version?: number;
  mandatoryFields?: any[];
  regexValidations?: any[];
  enableBodyMaps?: boolean;
  warning?: null;
  supportRaceField?: boolean;
  regular?: boolean;
  sensitive?: boolean;
  safeguarding?: boolean;
  allowedTypes?: string[];
  canPlanMove?: boolean;
  allowedRoles?: null;
}

export interface Checkin {
  childCheckinId: string;
  childId: string;
  institutionId: string;
  groupId: string;
  checkinTime: Date;
  pickupTime: Date;
  pickupRelationId: string;
  goHomeWithChildId: string;
  checkoutTime: Date;
  checkinLoginId: string;
  checkoutLoginId: string;
  autoCheckedOut: boolean;
  deletedAt: null;
  hours: number;
  checkinStatements: null;
}

export interface Image {
  small: string;
  large: string;
  empty: boolean;
  colorCode: number;
}

export interface Name {
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface SuccessResponse {
  childCheckinId: string;
  childId: string;
  institutionId: string;
  groupId: string;
  checkinTime: Date;
  pickupTime: Date;
  pickupRelationId: string;
  goHomeWithChildId: string;
  checkoutTime: null;
  checkinLoginId: string;
  checkoutLoginId: string;
  autoCheckedOut: boolean;
  deletedAt: null;
  hours: null;
  checkinStatements: null;
}

export interface ErrorResponse {
  error: string;
  errorCode: number;
  statusCode: number;
  log: boolean;
}
