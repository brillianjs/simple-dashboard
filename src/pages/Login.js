import { useState } from "react";
import { Text, Button } from "@chakra-ui/react";
import { supabase } from "../utils/api";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setOpen(true);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div
        className="max-w-2xl container border rounded-lg p-10 flex space-y-3 justify-center items-center flex-col"
        aria-live="polite"
      >
        <Text className="header text-3xl font-bold" color={"teal"}>
          Dashboard Login
        </Text>
        <p className="description text-sm text-gray-300">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form
            onSubmit={handleLogin}
            className="w-full space-y-3 flex justify-center flex-col"
          >
            <input
              id="email"
              className="inputField w-full p-4 border rounded-xl"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-full text-teal-700 rounded-xl bg-gray-100 font-bold p-2"
              aria-live="polite"
              color={"teal"}
            >
              Send magic link
            </button>
          </form>
        )}
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Verification Email Has Been Sent to your email</ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
