//
//     Generated by class-dump 3.5 (64 bit).
//
//     class-dump is Copyright (C) 1997-1998, 2000-2001, 2004-2013 by Steve Nygard.
//

#import "MSUpDownTextField.h"

#import "NSTextDelegate.h"

@class NSString;

@interface MSTextFieldKeyEventForwarder : MSUpDownTextField <NSTextDelegate>
{
}

- (BOOL)addedTextContainsOnlyDigits:(id)arg1;
- (id)findCanvasView;
- (id)keyEventFromString:(id)arg1;
- (void)sendKeyEventFromString:(id)arg1;
- (BOOL)textView:(id)arg1 shouldChangeTextInRange:(struct _NSRange)arg2 replacementString:(id)arg3;

// Remaining properties
@property(readonly, copy) NSString *debugDescription;
@property(readonly, copy) NSString *description;
@property(readonly) unsigned long long hash;
@property(readonly) Class superclass;

@end

