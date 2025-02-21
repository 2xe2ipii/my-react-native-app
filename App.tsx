import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Switch,
  Linking,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Math-Chemy",
    description: "A mobile game where arithmetic meets alchemy.",
    link: "https://github.com/drexlerreyes/math-chemy",
  },
  {
    id: "2",
    title: "AR Campus Navigator",
    description: "An AR-based navigation app for campus directions.",
    link: "https://github.com/drexlerreyes/ar-campus-navigator",
  },
  {
    id: "3",
    title: "SDFO-LFIMS",
    description: "A lost and found management system for DLSL.",
    link: "https://github.com/drexlerreyes/sdfo-lfims",
  },
];

interface ProjectItemProps {
  title: string;
  description: string;
  link: string;
  darkMode: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  link,
  darkMode,
}) => (
  <TouchableOpacity onPress={() => Linking.openURL(link)}>
    <View
      style={[
        styles.projectItem,
        darkMode ? styles.darkProject : styles.lightProject,
      ]}
    >
      <Text
        style={[
          styles.projectTitle,
          darkMode ? styles.darkText : styles.lightText,
        ]}
      >
        {title}
      </Text>
      <Text
        style={[styles.text, darkMode ? styles.darkText : styles.lightText]}
      >
        {description}
      </Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode((prev) => !prev);

  return (
    <SafeAreaView
      style={[
        styles.container,
        darkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <StatusBar style={darkMode ? "light" : "dark"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require("./assets/profilePicture.jpg")}
            style={styles.profilePic}
          />
          <Text
            style={[styles.name, darkMode ? styles.darkText : styles.lightText]}
          >
            Drexler Reyes
          </Text>
          <Text
            style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}
          >
            Software Developer | Game Development | AI Enthusiast
          </Text>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              darkMode ? styles.darkText : styles.lightText,
            ]}
          >
            Skills
          </Text>
          <Text
            style={[styles.text, darkMode ? styles.darkText : styles.lightText]}
          >
            ✅ React, JavaScript, TypeScript, Python, Unity C#, C++
          </Text>
          <Text
            style={[styles.text, darkMode ? styles.darkText : styles.lightText]}
          >
            ✅ Web, Game, & AR Development
          </Text>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              darkMode ? styles.darkText : styles.lightText,
            ]}
          >
            Projects
          </Text>
          <FlatList
            data={projects}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProjectItem {...item} darkMode={darkMode} />
            )}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              darkMode ? styles.darkText : styles.lightText,
            ]}
          >
            Contact
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:drexler_reyes@gmail.com")}
          >
            <Text
              style={[
                styles.link,
                darkMode ? styles.darkText : styles.lightText,
              ]}
            >
              <Ionicons name="mail" size={16} /> Email: drexler_reyes@gmail.com
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/drexlerreyes")}
          >
            <Text
              style={[
                styles.link,
                darkMode ? styles.darkText : styles.lightText,
              ]}
            >
              <Ionicons name="logo-github" size={16} /> GitHub: drexlerreyes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://linkedin.com/in/drexlerreyes")
            }
          >
            <Text
              style={[
                styles.link,
                darkMode ? styles.darkText : styles.lightText,
              ]}
            >
              <Ionicons name="logo-linkedin" size={16} /> LinkedIn: drexlerreyes
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.switchContainer}>
            <Text
              style={[
                styles.text,
                darkMode ? styles.darkText : styles.lightText,
              ]}
            >
              Dark Mode
            </Text>
            <Switch value={darkMode} onValueChange={toggleSwitch} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  projectTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  container: { flex: 1, padding: 20 },
  lightContainer: { backgroundColor: "#f9f9f9" },
  darkContainer: { backgroundColor: "#1c1c1e" },
  darkText: { color: "#fff" },
  lightText: { color: "#000" },
  header: { alignItems: "center", marginBottom: 20 },
  profilePic: { width: 120, height: 120, borderRadius: 60, marginVertical: 10 },
  name: { fontSize: 24, fontWeight: "bold", marginVertical: 5 },
  bio: { textAlign: "center", fontSize: 16, marginBottom: 10 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5 },
  projectItem: { padding: 15, marginVertical: 8, borderRadius: 10 },
  lightProject: { backgroundColor: "#e0e0e0" },
  darkProject: { backgroundColor: "#333" },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
});
