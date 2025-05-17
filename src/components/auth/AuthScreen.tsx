
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type AuthMode = "phone" | "email" | "ussd";

const AuthScreen: React.FC<{ onAuth: () => void }> = ({ onAuth }) => {
  const [mode, setMode] = useState<AuthMode>("phone");
  const [value, setValue] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const { toast } = useToast();
  
  const handleSendOTP = () => {
    if (!value) {
      toast({
        title: "Error",
        description: mode === "phone" 
          ? "Please enter your phone number" 
          : "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate OTP sending
    toast({
      title: "OTP Sent",
      description: `A verification code has been sent to your ${mode === "phone" ? "phone" : "email"}`,
    });
    setOtpSent(true);
  };
  
  const handleVerifyOTP = () => {
    if (!otp || otp.length < 4) {
      toast({
        title: "Error",
        description: "Please enter a valid OTP code",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate OTP verification (in production, this would call an API)
    toast({
      title: "Success",
      description: "Authentication successful",
    });
    onAuth();
  };
  
  const handleUSSDAuth = () => {
    toast({
      title: "USSD Auth",
      description: "Please dial *123*4# and follow the instructions",
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center pattern-bg p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto bg-ustg-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="M7 12h10" />
              <path d="M12 7v10" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold">Uganda Sovereign Tech Grid</CardTitle>
          <CardDescription>Sign in with OTP authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!otpSent ? (
            <>
              <div className="flex space-x-2 mb-6">
                <Button 
                  onClick={() => setMode("phone")} 
                  variant={mode === "phone" ? "default" : "outline"}
                  className="flex-1"
                >
                  Phone
                </Button>
                <Button 
                  onClick={() => setMode("email")} 
                  variant={mode === "email" ? "default" : "outline"}
                  className="flex-1"
                >
                  Email
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  type={mode === "phone" ? "tel" : "email"}
                  placeholder={mode === "phone" ? "Enter phone number" : "Enter email"}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full"
                />
              </div>
                
              <Button onClick={handleSendOTP} className="w-full">
                Send OTP
              </Button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-2 text-muted-foreground text-sm">
                Enter the 6-digit code sent to {value}
              </div>
              <Input
                type="text"
                placeholder="Enter OTP code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="text-center text-2xl tracking-widest"
                maxLength={6}
              />
              <Button onClick={handleVerifyOTP} className="w-full">
                Verify
              </Button>
              <Button variant="link" onClick={() => setOtpSent(false)} className="w-full">
                Change {mode === "phone" ? "Phone Number" : "Email"}
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="w-full text-center">
            <Button variant="ghost" className="text-xs w-full" onClick={handleUSSDAuth}>
              No smartphone? Use USSD Authentication
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthScreen;
