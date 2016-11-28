//
//     Generated by class-dump 3.5 (64 bit).
//
//     class-dump is Copyright (C) 1997-1998, 2000-2001, 2004-2013 by Steve Nygard.
//

#import "NSObject.h"

@class NSDate, NSDictionary, NSObject<OS_dispatch_queue>, NSString;

@interface BCLicense : NSObject
{
    NSString *_applicationID;
    NSDictionary *_payload;
    NSDictionary *_metadata;
    NSString *_publicCertificate;
    long long _signatureStatus;
    NSObject<OS_dispatch_queue> *_validationQueue;
    double _referenceTime;
    NSDate *_referenceDate;
    NSDate *_networkDate;
}


@property(retain, nonatomic) NSString *applicationID; // @synthesize applicationID=_applicationID;
@property(readonly, nonatomic) NSDate *currentDate;
- (id)expiryDate;
- (id)init;
- (id)initWithJSONData:(id)arg1 applicationID:(id)arg2 publicCertificate:(id)arg3;
- (id)initWithURL:(id)arg1 applicationID:(id)arg2 publicCertificate:(id)arg3;
- (BOOL)isAboutToExpire;
- (BOOL)isAppNameValid;
- (BOOL)isDeviceValid;
- (BOOL)isExpired;
- (BOOL)isSignatureValid;
- (BOOL)isValid;
- (id)licenseID;
- (void)log;
@property(retain, nonatomic) NSDictionary *metadata; // @synthesize metadata=_metadata;
@property(retain, nonatomic) NSDate *networkDate; // @synthesize networkDate=_networkDate;
@property(retain, nonatomic) NSDictionary *payload; // @synthesize payload=_payload;
- (id)payloadHash;
@property(retain, nonatomic) NSString *publicCertificate; // @synthesize publicCertificate=_publicCertificate;
- (BOOL)purchaseIsExpiring;
@property(retain, nonatomic) NSDate *referenceDate; // @synthesize referenceDate=_referenceDate;
@property(nonatomic) double referenceTime; // @synthesize referenceTime=_referenceTime;
- (long long)remainingDays;
- (BOOL)saveToURL:(id)arg1 error:(id *)arg2;
@property(nonatomic) long long signatureStatus; // @synthesize signatureStatus=_signatureStatus;
@property(retain, nonatomic) NSObject<OS_dispatch_queue> *validationQueue; // @synthesize validationQueue=_validationQueue;
- (BOOL)shouldTryToRequestNewTrialLicense;
- (id)status;
@property(readonly, nonatomic) double systemStartupTime;
- (long long)type;
- (void)validateDate;
- (void)validateSignature;

@end

