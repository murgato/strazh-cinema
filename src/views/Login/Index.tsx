import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/login.styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { globalStyles } from "../../styles/global.styles";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AwesomeAlert from "react-native-awesome-alerts";
import { logIn } from "../../controllers/Login.controllers";
export function Login({ navigation }: any) {
  
  const [showAlert, setShowAlert] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const doLogin = () => {
    let response = logIn(login);
    if (response) {
      navigation.push("Home");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome</Text>
      <Text style={globalStyles.subtitle}>Login in to the cinema</Text>
      <View>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="email-outline"
            size={18}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setLogin({ ...login, email: text });
            }}
            placeholder="E-mail"
            placeholderTextColor={"#E3E1DF"}
            value={login.email}
          />
        </View>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="lock-outline"
            size={18}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={"#E3E1DF"}
            onChangeText={(text) => {
              setLogin({ ...login, password: text });
            }}
            value={login.password}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={async () => {
            doLogin();
          }}
        >
          <Text style={styles.textButton}>Login</Text>
        </Pressable>
        <View style={styles.containerTextOrUsing}>
          <View style={styles.line} />
          <Text style={styles.textOrUsing}>OR using</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.containterButtons}>
          <Pressable style={styles.buttonLogin} onPress={() => {}}>
            <AntDesign
              style={styles.butonLoginIcon}
              name="googleplus"
              size={18}
              color="#E3E1DF"
            />
          </Pressable>
          <Pressable style={styles.buttonLogin} onPress={() => {}}>
            <AntDesign
              style={styles.butonLoginIcon}
              name="instagram"
              size={18}
              color="#E3E1DF"
            />
          </Pressable>
          <Pressable style={styles.buttonLogin} onPress={() => {}}>
            <Entypo
              style={styles.butonLoginIcon}
              name="vk"
              size={18}
              color="#E3E1DF"
            />
          </Pressable>
        </View>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Wrong login !"
        message="try again !"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok !"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        contentStyle={{ backgroudColor: "black" }}
      />
    </SafeAreaView>
  );
}
