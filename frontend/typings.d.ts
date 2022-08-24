import { ExternalProvider } from "@metamask/providers";

// To give window.ethereum a type.
declare global {
    interface Window{
      ethereum?:ExternalProvider
    }
  }