<template>

	<div class="container">
		<div class="content" id="content">
			<h2 class="title_nav">{{ layout.title }}</h2>
		
      <div class="section">

        <div class="mgb32">
          <Tag :data="frontData.tag.guide" :option="{ type:'default', multi: false }" />
        </div>

        <h3 class="tit_terms">위치정보 활용정보 제공에 관한 동의서</h3>
        <div class="terms_wrap">
          <div class="terms_cnts">
            <h4 class="tit_terms">제 1조(목적)</h4>
            <ul class="list">
              <li>(주)뉴플로이(이하 ‘회사’라 한다)의 뉴플로이에 관한 모든 관련 서비스(이하 ‘서비스’라 한다)는 회원님에게 보다 다양한 정보를 제공하고, 서비스의 질을 향상시키기 위하여 당사의 제휴사에게 「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률 」및 「신용정보의 이용 및 보호에 관한 법률」의 규정을 준수하여 회원님의 개인(신용)정보를 제3자에게 상품소개 및 홍보 등 영업목적으로 제공할 수 있습니다.</li>
            </ul>
          </div>
          <div class="terms_cnts">
            <h4 class="tit_terms">제 2조(수집 및 활용 관련 정보)</h4>
            <ul class="list">
              <li>개인정보가 제공되는 비즈니스 파트너사, 제공 정보, 제공된 정보의 이용목적은 아래와 같습니다. 회원님들 중 이 개인정보의 제3자 마케팅 활용동의서 등에 동의하신 회원님들의 정보만이 제공되며, 제공된 정보는 명시된 이용목적을 벗어나 이용되지 않고, 개인정보의 유출 등 사고가 일어나지 않도록 더욱 철저한 보안이 이루어지도록 노력하고 있습니다.</li>
            </ul>
          </div>
          <div class="terms_cnts">
            <h4 class="tit_terms">제 3조(제3자 정보제공의 동의 철회)</h4>
            <ul class="list">
              <li>본 동의서에 동의하고 가입하신 신규회원 중 제3자 정보제공을 철회하고 싶은 회원은 이미 제3자에게 제공된 개인정보라 하더라도, 언제든지 열람, 정정, 삭제를 요구할 수 있습니다. 열람, 정정, 삭제 및 정보제공 동의 철회는 뉴플로이 고객센터(02-6956-4660)를 통해 본인확인 후 요청할 수 있습니다. 해당 요청의 근거자료를 남기기 위해 해당 통화내역은 녹취될 수 있으며 회원은 이에 동의하는 것으로 간주합니다.
              이미 제공된 회원정보를 철회하는 데는 최대 10일의 기간이 소요됩니다. 활용동의 철회를 요청하시더라도 위와 같은 이유로 해당 철회 적용 이전까지 마케팅에 활용 될 수 있음을 알려드립니다.
              회사는 회원님의 소중한 정보를 보호하기 위하여 신속하게 처리되도록 최선의 노력을 다하겠습니다.</li>
            </ul>
          </div>
          <div class="info_files">
            <div class="box_gray">
              <span class="txt">본문</span>
              <NuxtLink :to="{}" class="btn_download" download><span class="blind">다운로드</span></NuxtLink>
            </div>
            <div class="box_gray">
              <span class="txt">별표</span>
              <NuxtLink :to="{}" class="btn_download" download><span class="blind">다운로드</span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="info_pdf">
          <div class="box_gray">
            <ul class="text_list bull">
              <li>⁠이용약관을 실행할 수 있는 프로그램이 없으신 분은 Acrobat Reader를 먼저 다운받아 설치하시기 바랍니다.</li>
            </ul>
            <NuxtLink :to="{}" class="btn xsm c07" title="새 창 열림">Acrobat Reader 다운로드</NuxtLink>
          </div>
        </div>
      </div> <!-- // section -->

		</div> <!-- // content -->
	</div><!-- // container -->

</template>

<script>
import Tag from '@/components/Tag'

export default {
  name: 'ALFM-FT01-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '이용약관' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    Tag,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
