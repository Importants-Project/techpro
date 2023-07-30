<template>
  <div class="secretLink m-3">
    <div class="contanier">
      <img src="../assets/images/0001.jpg" style="margin-bottom: -170px; position: relative; z-index: 1"  alt="">
      <img src="../assets/images/0002.jpg" alt="">


<!--      <div class="secretLink__box">-->
<!--        <img class="secretLink__box-logo"-->
<!--             src="https://assets.ext.hpe.com/is/image/hpedam/a50006880enw_orglogoimg?$crlogo$" alt="">-->

<!--      </div>-->

      <h1 class="secretLink__title">Top 12 reasons to choose HPE Alletra 5000</h1>
      <p class="secretLink__desc">Built from the DNA of HPE Nimble Storage Adaptive Flash, HPE Alletra 5000 delivers simple, reliable,
        cost-efficient hybrid storage for general-purpose workloads. It’s everything you love about your HPE Nimble
        Storage experience—and a whole lot more.</p>

      <img src="https://assets.ext.hpe.com/is/image/hpedam/a50006880enw_introimg?$crimg$" alt="">

      <h3 class="secretLink__subTitle">Check out the top 12 reasons to choose HPE Alletra 5000:</h3>

      <div class="secretLink__rule" v-for="(rule , i) in rules" :key="i">
<div class="secretLink__rule-flex">
  <span class="secretLink__rule-num">{{rule.num}}</span> <span class="secretLink__rule-dot"></span>
        <h3 class="secretLink__rule-title"> {{ rule.title }}</h3>
</div>

        <p class="secretLink__rule-desc">
         {{rule.desc}}
        </p>
      </div>

    </div>
  </div>
</template>


<script>
export default {

  data() {
    return {
      rules: [
        {
          num: '01',
          title: 'Go faster with the cloud experience:',
          desc: `Leverage HPE Alletra 5000 to simplify on-prem storage with the speed and agility of a cloud operational experience. Make underlying infrastructure invisible while shifting operations to be app, not infrastructure, centric. You can deploy in minutes, upgrade transparently, and manage from anywhere. Unlike traditional storage management, HPE Alletra 5000 enables line of business (LOB) and database admins to effortlessly provision storage and accelerate app deployment—freeing up IT resources to work on strategic, higher-value initiatives.`
        },
        {
          num: '02',
          title: 'Put your storage on autopilot with an AI-managed service:',
          desc: `Say goodbye to endless firefighting, thanks to HPE InfoSight, industry-leading AIOps for infrastructure that drives autonomous operations and helps ensure your apps are always-on and always fast. You can predict and prevent disruptions before they occur across the stack, pinpoint issues between storage and VMs, and identify under-utilized virtual resources. Let AI-driven recommendations take the guesswork out of managing data infrastructure and leverage predictive support automation and direct access to experts to help eliminate time-consuming escalations.`
        },
        {
          num: '03',
          title: 'Optimize price performance for general-purpose workloads:',
          desc: `Harness the flash performance and disk economics of ultra-efficient architecture that HPE Alletra 5000 delivers, which is designed from the ground up to deliver fast, consistent performance, and industry-leading data efficiency for your workloads. Accelerate your apps with sub-millisecond latency and experience speeds up to 25% faster than previous HPE Nimble Storage Hybrid Flash Arrays. 1 Slash your storage costs and footprint with always-on data reduction that delivers up to 5x more space savings without performance penalty.`
        },
        {
          num: '04',
          title: 'Rely on six nines availability—guaranteed:',
          desc: `Forget the anxiety and disruption of unexpected downtime. HPE Alletra 5000 leverages a proven AI-driven platform to guarantee resilient 6x9s data availability for every customer and every array.  It’s a cost-nothing, do-nothing guarantee—and with HPE InfoSight predicting and preventing problems, your arrays get smarter, better, and more reliable every day.`
        },

        {
          num: '05',
          title: 'Depend on extreme data integrity and no-compromise durability:',
          desc: `Don’t accept trade-offs between data resilience and performance. HPE Alletra 5000 delivers Triple+ Parity RAID as standard with zero performance impact. Triple+ Parity RAID can handle three simultaneous drive failures without data loss and provides additional protection through intra-drive parity.`
        },
        {
          num: '06',
          title: 'Scale easily and without disruption:',
          desc: `Grow the capacity and performance of a running system independently and non-disruptively with HPE Alletra 5000 scale-to-fit. You can also scale out to four arrays with transparent volume mobility between arrays, achieving linear performance and capacity scaling.`
        },
        {
          num: '07',
          title: 'Simplify and lower the cost of data protection:',
          desc: `Deliver on your recovery service-level agreements (SLAs) with fast, simple, and integrated app aware backup and recovery—on-premises and in the cloud. Natively replicate from HPE Alletra 6000 All Flash Arrays to HPE Alletra 5000 Hybrid Arrays. Leverage SaaS-based HPE Backup and Recovery Service to simplify hybrid cloud data protection with instant restores, rapid recovery on-prem, and cost-effective long-term retention in the cloud.`
        },
        {
          num: '08', title: 'Get the HCI experience without limitations:', desc: `Harness all the simplicity and ease-of-use that you love about hyperconverged infrastructure (HCI)—but for all your apps.

HPE Alletra disaggregated HCI (dHCI) delivers a hyperconverged experience that

includes business-critical speed and resiliency alongside independent scaling of compute and storage. `
        },

        {
          num: '09', title: 'Consume as a service, on-demand:', desc: `Shift from owning and maintaining data infrastructure to simply accessing and utilizing it. Avoid over- and under-provisioning concerns, CAPEX budget constraints, and complex procurement cycles by choosing a flexible, as-a-service consumption model with the HPE GreenLake edge-to-cloud platform. Simply access
the storage resources you need through workload-optimized storage tiers that are delivered in days. Scale on-demand as necessary, rely on buffer capacity for unexpected workload or usage demands, and leave behind heavy upfront costs for a transparent, monthly subscription.`
        },
        {
          num: '10',
          title: 'Experience a simple, affordable, risk-free transition:',
          desc: `HPE Nimble Storage Hybrid Flash Array customers can take the risk and complexity out of switching to HPE Alletra 5000 through quick, non-disruptive data-in-place upgrades. With in-field controller upgrades, you continue to use and drive ROI from your existing HPE Nimble Storage chassis, media, and networking. And HPE Nimble Storage customers can transition to the economical HPE Alletra 5010, getting 2x capacity at a similar price point to a comparable HPE Nimble Storage Hybrid Array.`
        },
        {
          num: '11',
          title: 'Get everything as a service:',
          desc: `Accelerate your data-first modernization with the unified experience, control, and visibility of HPE GreenLake, which brings the cloud to wherever your apps and data live. HPE Alletra 5000 is powered by HPE GreenLake, giving you fast and easy access to over 70 cloud services.`
        },
        {
          num: '12',
          title: 'Accelerate business outcomes:',
          desc: `HPE Alletra 5000 empowers you to transform from IT operator to service provider, which means you focus on accelerating outcomes, not managing infrastructure. Speed time to value by saving 98% of your operational time through intent-based provisioning.  Lower risk with 99.9999% availability guaranteed for general-purpose workloads,  and boost agility with 86% of problems predicted and automatically resolved before you even recognize that there’s an issue.`
        },
      ]
    }
  }
}

</script>

