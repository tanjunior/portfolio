import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";

// import { log } from "~/utils/logger";

const Profile = () => {
  const { user } = useUser();
  // const { signOut } = useAuth();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);

  const onSaveUser = async () => {
    try {
      // This is not working!
      const result = await user?.update({
        firstName: "John",
        lastName: "Doe",
      });
      console.log("🚀 ~ file: profile.tsx:16 ~ onSaveUser ~ result:", result);
    } catch (e) {
      console.log(
        "🚀 ~ file: profile.tsx:18 ~ onSaveUser ~ e",
        JSON.stringify(e),
      );
    }
  };

  // const onSignOutPress = async () => {
  //   try {
  //     await signOut();
  //   } catch (err: any) {
  //     log("Error:> " + err?.status || "");
  //     log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        Good morning {user?.firstName} {user?.lastName}!
      </Text>

      <TextInput
        placeholder="First Name"
        value={firstName ?? ""}
        onChangeText={setFirstName}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName ?? ""}
        onChangeText={setLastName}
        style={styles.inputField}
      />
      <Button
        onPress={onSaveUser}
        title="Update account"
        color={"#6c47ff"}
      ></Button>

      {/* <Button
        onPress={onSignOutPress}
        title="Signout"
        color={"#6c47ff"}
      ></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
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
});

export default Profile;
