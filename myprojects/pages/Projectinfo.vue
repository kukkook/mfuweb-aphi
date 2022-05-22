<template>
  <v-simple-table light>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Project ID</th>  
          <th class="text-left">Project Name</th>
          <th class="text-left">Years</th>
          <th class="text-left">By</th>
          <th class="text-left">Funding Name</th>
          <th class="text-left">Funding Source</th>
          <th class="text-left">Budget</th>
          <th class="text-left">Period from</th>
          <th class="text-left">Period to</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in prolist" :key="item.name">
          <td>{{ item.project_id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.Years }}</td>
          <td>{{ item.By }}</td>
          <td>{{ item.project_funding_name }}</td>
          <td>{{ item.project_funding_source }}</td>
          <td>{{ item.Budget }}</td>
          <td>{{ item.From }}</td>
          <td>{{ item.To }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      prolist: [
        {
          project_id:1,
          name: "ผลของโปรแกรมการเรียนรู้ต่อพฤติกรรมการลดใช้สารเคมีป้องกันและกำจัดศัตรูพืชของเกษตรกร ตำบลแม่คำ อำเภอแม่จัน จังหวัดเชียงราย",
          Years: 2560,
          By: "Dr.Rikki Ivanishin",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 50000,
          From: "1/5/2017",
          To: "1/4/2018",
        },
        {
          project_id:2,  
          name: "การตรวจหาเชื้อไวรัสตับอักเสบอีในตับหมูสดที่จำหน่ายในตลาดสดของจังหวัดเชียงราย",
          Years: 2560,
          By: "Dr.Hailee Lethabridge",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 100000,
          From: "1/5/2017",
          To: "1/4/2018",
        },
        {
          project_id:3,  
          name: "การติดเชื้อปรสิตฉวยโอกาสในลำไส้และไวรัสตับอักเสบอีในผู้ติดเชื้อเอชไอวีในจังหวัดเชียงราย",
          Years: 2560,
          By: "Dr.Freda Wadsworth",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 50000,
          From: "1/5/2017",
          To: "1/4/2018",
        },
        {
          project_id:4,  
          name: "การวิเคราะห์การเรียนรู้และประยุกต์ใช้ในการจัดการเรียนการสอนรุปประโยค 'Le' ของนักศึกษาไทยในภาคเหนือตอนบน",
          Years: 2560,
          By: "Dr.Byron Wibberley",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 100000,
          From: "1/5/2017",
          To: "1/4/2018",
        },
        { 
          project_id:5,  
          name: "การใช้ภาษาและอัตลักษณ์ทางด้านวัฒนธรรมของนักเรียนชาวไทยเชื้อสายจีนยูนนานระดับมัธยมศึกษาที่อาศัยอยู่ในเขตเศรษฐกิจพิเศษชายแดนจังหวัดเชียงราย",
          Years: 2560,
          By: "Dr.Karlyn Klammt",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 50000,
          From: "1/5/2017",
          To: "1/4/2018",
        },
        {
          project_id:6,  
          name: "การดำเนินการตามยุทธศาสตร์ 'หนึ่งแถบ หนึ่งเส้นทาง' จากผู้นำสูงสุดมายังการดำเนินการของผู้นำในแต่ละมณฑลของจีน กรณีศึกษาการดำเนินการตามยุทธศาสตร์มณฑลยูนนาน",
          Years: 2560,
          By: "Dr.Hestia Normanvill",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 100000,
          From: "1/5/2017",
          To: "30/4/2018",
        },
        {
          project_id:7,  
          name: "ทัศนคติของครูสอนภาษาจีนต่อการประยุกต์ใช้เทคโนโลยีสารสนเทศในการสอน กรณีศึกษาครูระดับมัธยมและประถมศึกษา จังหวัดเชียงราย	",
          Years: 2560,
          By: "Dr.Anneliese Nancekivell",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 50000,
          From: "1/5/2017",
          To: "30/4/2018",
        },
        {
          project_id:8,
          name: "การประเมินสมบัติทางเคมีกายภาพและไฟฟ้าแบบไม่ทำลายของผลไม้ตัดแต่งพร้อมรับประทานระหว่างการเก็บรักษาด้วยความเย็น",
          Years: 2560,
          By: "Dr.Dagny Brownsill",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget: 100000,
          From: "1/5/2017",
          To: "30/4/2018",
        },
        {
          project_id:9,
          name: "การศึกษาเปรียบเทียบคุณลักษณะทางประสาทสัมผัส องค์ประกอบทางเคมี และการยอมรับของผู้บริโภค่ ต่อสับปะรดที่ปลูกในจังหวัดเชียงรายด้วยวิธีการเพาะปลูกที่แตกต่างกัน",
          Years: 2560,
          By: "Dr.Tedi Deare",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget:50000,
          From: "1/5/2017",
          To: "30/4/2018",
        },
        {
          project_id:10,
          name: "การหาความสัมพันธ์ของ Gene Signature ที่ทำให้เกิดโรคมะเร็งปอด และยาที่เกี่ยวข้อง",
          Years: 2560,
          By: "Dr.Elisabet Condie",
          project_funding_name: "งบมหาวิทยาลัย(ประเภททุนนักวิจัยใหม่)",
          project_funding_source: "MFU",
          Budget:100000,
          From: "1/5/2017",
          To: "30/4/2018",
        },
      ],
    };
  },
};
</script>