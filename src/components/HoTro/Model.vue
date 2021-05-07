<script>

import firebase from '../../firebase'
import router from '../../router'

export default {
  data () {
    return {

      ////bài học//////////////////
        detail: '',
        name :{label: 'Tên bài học', sortable: true, 'class': 'text-center'},
        picture :"",
        rank :"",
        status: "",
        type : "",
        video : "",
      lesson: [],
      errors: [],
      ref: firebase.firestore().collection('lesson'),

//////////////////người dùng//////////////////////////
        name: { label: 'Name', sortable: true, 'class': 'text-left' },
        username :{label: 'Username', sortable: true, 'class': 'text-left'},
        email :{label: 'Email', sortable: true, 'class': 'text-left'},
        address :{label: 'Address', sortable: true, 'class': 'text-left'},
        actions: { label: 'Action', 'class': 'text-center' },
      users: [],
      errors: [],
      ref: firebase.firestore().collection('users'),

///////////////////câu hỏi////////////////
        A: { label: 'A', sortable: true, 'class': 'text-left' },
        B :{label: 'B', sortable: true, 'class': 'text-left'},
        C :{label: 'C', sortable: true, 'class': 'text-left'},
        D :{label: 'D', sortable: true, 'class': 'text-left'},
        answer :{label: 'Answer', sortable: true, 'class': 'text-left'},
        cauhoi :{label: 'Câu hỏi', sortable: true, 'class': 'text-left'},
        actions: { label: 'Action', 'class': 'text-center' },
        questions: [],
      errors: [],
      ref: firebase.firestore().collection('questions'),

/////////////////tin tức/////////////////////////////
        anh: { label: 'ảnh', sortable: true, 'class': 'text-center' },
        ngay :{label: 'Ngày tạo', sortable: true, 'class': 'text-center'},
        noidung :{label: 'Nội dung', sortable: true, 'class': 'text-center'},
      news: [],
      errors: [],
      ref: firebase.firestore().collection('news'),

      /////////////////////////////kết quả////////////////////////
        diem: { label: 'Điểm', sortable: true, 'class': 'text-center' },
        nguoidung :{label: 'Tên người dùng', sortable: true, 'class': 'text-center'},
        dethi :{label: 'Đề thi', sortable: true, 'class': 'text-center'},
        ngaythi :{label: 'Ngày thi', sortable: true, 'class': 'text-center'},
        idUser: "",
        idDethi: "",
      ketqua: [],
      errors: [],
      ref: firebase.firestore().collection('ketqua'),

      ////////////////////////ch_db///////////////////////
              cap: { label: 'Cấp', sortable: true, 'class': 'text-center' },
        ghichu :{label: 'Ghi chú', sortable: true, 'class': 'text-center'},
        id_bh :{label: 'bài học', sortable: true, 'class': 'text-center'},
        id_de :{label: 'Để', sortable: true, 'class': 'text-center'},
        id_question: { label: 'Câu hỏi',sortable: true, 'class': 'text-center' },
      ch_db: [],
      errors: [],
      ref: firebase.firestore().collection('ch_db'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.lesson = [];
      querySnapshot.forEach((doc) => {
        this.lesson.push({
          key: doc.id,
          detail: doc.data().detai,
          name : doc.data().name,
          picture : doc.data().picture,
          type : doc.data().type,
          rank : doc.data().rank,
          status : doc.data().status,
          video : doc.data().video
        });
            
      });
    });
  },
  methods: {
    editLesson (key) {
      router.push({ name: 'editlesson', params: { id: key }})
    },
     delLesson(key){
      this.ref.doc(key).delete().then(() => {
        alert('Đã xóa thành công'),
        console.log('delete', key)
      }).catch((error) => {alert("Error removing:", error);});
    }
  }
}
</script>