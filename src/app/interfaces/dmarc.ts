// src/app/models/dmarc-data.interface.ts

export interface DMARCData {
    base_domain: string;
    dmarc: {
        location: string;
        record: string;
        tags: {
            [key: string]: {
                explicit: boolean;
                value: string | number | { address: string; scheme: string; size_limit: number | null }[];
            };
        };
        valid: boolean;
        warnings: string[];
    };
    dnssec: boolean;
    domain: string;
    mta_sts: {
        error: string;
        valid: boolean;
    };
    mx: {
        hosts: {
            addresses: string[];
            dnssec: boolean;
            hostname: string;
            preference: number;
            starttls: boolean;
            tls: boolean;
        }[];
        warnings: string[];
    };
    ns: {
        hostnames: string[];
        warnings: string[];
    };
    smtp_tls_reporting: {
        error: string;
        valid: boolean;
    };
    spf: {
        dns_lookups: number;
        dns_void_lookups: number;
        parsed: {
            all: string;
            exp: string | null;
            fail: string[];
            include: {
                dns_lookups: number;
                dns_void_lookups: number;
                domain: string;
                parsed: {
                    all: string;
                    exp: string | null;
                    fail: string[];
                    include: string[];
                    neutral: string[];
                    pass: { mechanism: string; value: string }[];
                    redirect: string | null;
                    softfail: string[];
                };
                record: string;
                warnings: string[];
            }[];
            neutral: string[];
            pass: string[];
            redirect: string | null;
            softfail: string[];
        };
        record: string;
        valid: boolean;
        warnings: string[];
    };
}
