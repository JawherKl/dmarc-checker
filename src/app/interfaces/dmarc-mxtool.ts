// src/app/models/dmarc-api-response.interface.ts

export interface DMARCWarning {
    ID: number;
    Name: string;
    Info: string;
    Url: string;
    PublicDescription: string | null;
    IsExcludedByUser: boolean;
  }
  
  export interface DMARCPassed {
    ID: number;
    Name: string;
    Info: string;
    Url: string;
    PublicDescription: string | null;
    IsExcludedByUser: boolean;
  }
  
  export interface DMARCInformation {
    Tag: string;
    TagValue: string;
    Name: string;
    Prefix: string;
    Type: string;
    Value: string;
    PrefixDesc: string;
    RecordNum: number;
    Description: string;
  }
  
  export interface DMARCTranscript {
    Transcript: string;
  }
  
  export interface DMARCRelatedLookup {
    Name: string;
    URL: string;
    Command: string;
    CommandArgument: string;
  }
  
  export interface DMARCApiResponse {
    UID: string | null;
    ArgumentType: string;
    Command: string;
    IsTransitioned: boolean;
    CommandArgument: string;
    TimeRecorded: string; // Use `Date` type if you need to parse it into a Date object.
    ReportingNameServer: string;
    TimeToComplete: string;
    RelatedIP: string | null;
    ResourceRecordType: number;
    IsEmptySubDomain: boolean;
    IsEndpoint: boolean;
    HasSubscriptions: boolean;
    AlertgroupSubscriptionId: string | null;
    Failed: any[]; // Replace `any` if you have more specific types for the `Failed` field.
    Warnings: DMARCWarning[];
    Passed: DMARCPassed[];
    Timeouts: any[]; // Replace `any` if you have more specific types for the `Timeouts` field.
    Errors: any[]; // Replace `any` if you have more specific types for the `Errors` field.
    IsError: boolean;
    Information: DMARCInformation[];
    MultiInformation: any[]; // Replace `any` if you have more specific types for the `MultiInformation` field.
    Transcript: DMARCTranscript[];
    MxRep: number;
    EmailServiceProvider: string | null;
    DnsServiceProvider: string | null;
    DnsServiceProviderIdentifier: string | null;
    RelatedLookups: DMARCRelatedLookup[];
  }
  