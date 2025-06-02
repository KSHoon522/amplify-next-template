"use client";

import { PropsWithChildren } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export default function AmplifyProvider({ children }: PropsWithChildren) {
  return <Authenticator>{children}</Authenticator>;
}
