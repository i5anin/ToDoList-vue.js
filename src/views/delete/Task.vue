<script>
import { auth, database } from "@/firebase";
import { onValue, ref, set, update } from "firebase/database";

export default {
  data: () => ({
    newTask: { title: "", subtitle: "" },
    tasks: [],
    userId: null,
  }),
  mounted() {
    this.userId = auth.currentUser.uid;
  },
  methods: {
    fetchData() {
      const reference = ref(database, "todos/" + this.userId + "/tasks/");
      onValue(reference, (snapshot) => {
        const tasks = snapshot.val();
        this.tasks = tasks.filter((task) => task.completed === false);
      });
    },
    createTask() {
      this.tasks.push(this.newTask);
      const updates = {};
      updates["todos/" + this.userId + "/tasks/"] = this.tasks;
      return update(ref(database), updates);
    },
    deleteTask(id) {
      const filteredTasks = this.tasks.filter((task) => task.id !== id);
      const updates = {};
      updates["todos/" + this.userId + "/tasks/"] = filteredTasks;
      return update(ref(database), updates);
    },
  },
};
</script>
