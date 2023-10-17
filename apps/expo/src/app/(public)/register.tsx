import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import Spinner from "react-native-loading-spinner-overlay";
import { router, Stack } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

import { OAuthButtons } from "~/components/OAuth";
import { instanceOfClerkError } from "~/utils/logger";

const Register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [pendingVerification, setPendingVerification] = useState(false);
  // const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  // Create the user and send the verification email
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      // Create the user on Clerk
      const result = await signUp.create({
        emailAddress,
        password,
        username,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.replace("/(auth)/home");
      } else if (result.status === "missing_requirements") {
        console.log("Missing requirements", result.missingFields);
      } else {
        console.log("Abandoned");
      }

      // Send verification Email
      // await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to verify the email address
      // setPendingVerification(true);
    } catch (err) {
      if (instanceOfClerkError(err)) {
        alert(err.errors.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // // Verify the email address
  // const onPressVerify = async () => {
  //   if (!isLoaded) {
  //     return;
  //   }
  //   setLoading(true);

  //   try {
  //     const completeSignUp = await signUp.attemptEmailAddressVerification({
  //       code,
  //     });

  //     await setActive({ session: completeSignUp.createdSessionId });
  //   } catch (err: any) {
  //     alert(err.errors[0].message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={
          {
            // headerBackVisible: !pendingVerification
          }
        }
      />

      <OAuthButtons />

      <TextInput
        autoCapitalize="none"
        placeholder="simon@galaxies.dev"
        value={emailAddress}
        onChangeText={setEmailAddress}
        style={styles.inputField}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="username"
        value={username}
        onChangeText={setUsername}
        style={styles.inputField}
      />

      <Button
        onPress={onSignUpPress}
        title="Sign up"
        color={"#6c47ff"}
      ></Button>

      {/* {!pendingVerification && (
        <>
          <TextInput
            autoCapitalize="none"
            placeholder="simon@galaxies.dev"
            value={emailAddress}
            onChangeText={setEmailAddress}
            style={styles.inputField}
          />
          <TextInput
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputField}
          />

          <Button
            onPress={onSignUpPress}
            title="Sign up"
            color={"#6c47ff"}
          ></Button>
        </>
      )}

      {pendingVerification && (
        <>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              style={styles.inputField}
              onChangeText={setCode}
            />
          </View>
          <Button
            onPress={onPressVerify}
            title="Verify Email"
            color={"#6c47ff"}
          ></Button>
        </>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});

export default Register;
