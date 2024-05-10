import { Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'
import Images from '../Images/Images'
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
import img4 from '../Images/img4.png'
import QRCode from '../Images/download.png'
import Screenshot1 from '../Images/Screenshot1.png'
import Screenshot2 from '../Images/Screenshot2.png'
import Screenshot3 from '../Images/Screenshot3.png'
import Screenshot4 from '../Images/Screenshot4.png'
import Screenshot5 from '../Images/Screenshot5.png'


const styles = StyleSheet.create({
  whole: {
    margin: '25px 25px 0 25px',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  image1: {
    width: 62,  
    height: 60,
  },
  text1: {
    fontSize: '16',
    textAlign: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: '9',
  },
  text3: {
    marginTop: '15px',
    marginBottom: '15px',
    fontSize: '13',
    textAlign: 'center',
    alignItems: 'center',
  },
  all: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  first: {
    flexDirection: 'column',
    fontSize: '9',
  },
  first1: {
    flexDirection: 'row',
    marginBottom: '20px',
  },
  first2: {
    width: '90px'
  },
  txt: {
    fontSize: '9',
    marginLeft: '60px',
    marginBottom: '20px',
  },
  table: {
    fontSize: '9',
    marginLeft: '60px',
    marginBottom: '20px',
    width: '450px',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#bfbfbf',
    // marginBottom: '20px',
  },
  tableRow: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  tableRowh: {
    flexDirection: 'row',
    backgroundColor: 'rgba(211, 211, 211)',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  tableCell: {
    flex: 1,
    padding: '5px',
    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: '#1111',
  },
  imgf3: {
    marginLeft: '60px',
    width: '450px',
    marginBottom: '20px',
    borderBottom: '2 solid #000000',
    // borderBottomWidth: 1,
    // marginVertical: 10,

  },
  img3: {
    marginLeft: '60px',
    width: '450px',
    marginBottom: '20px',
  },
  img4: {
    marginLeft: '60px',
    width: '450px',
    marginBottom: '30px',
  },
  QRCode: {
    marginLeft: '60px',
    width: '100px',
  },
  print: {
    fontSize: '10px',
    marginLeft: '430px',
    marginBottom: '30px',
  },
  img2: {
    width: '460px',
    margin: '50px 0px 80px 50px',
  },
  image2: {
    width: 48,  
    height: 44,
    marginTop: '30px',
    marginRight: '30px',
  },
  page3: {  
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  img1: {
    marginTop: '15px',
    marginLeft: '90px',
    width: '400px',
    marginBottom: '50px',
  },
  s2: {
    marginTop: '30px',
    marginBottom: '30px',
  }
})

const PDFFile = () => {
  return (
   <Document>
    <Page>
      <View style={styles.whole}>
      <View style={styles.header}>
    <Image style={styles.image1} src={insurance} />
    <View style={styles.text1}>
      <Text>Ministry of Planning and Finance</Text>
      <Text>Myanma Insurance</Text>
      </View>
      <View style={styles.text2}>
        <Text>phone No: 1234567</Text>
        <Text>Email: insure@gmail.com</Text>
      </View>
      </View>
      <Text style={styles.text3}>Certificate of Insurance - Inbound Travel Accident Insurance</Text> 
      <View style={styles.all}>
        <View style={styles.first}>
        <View style={styles.first1}><Text style={styles.first2}>Insurance Period</Text><Text>: 30 Days</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>Certificate Number</Text><Text>: ITA/75869</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>Agent/Agency name</Text><Text>: [N/A]</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>Policy Holder</Text><Text>: TEST</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>Covid-19 coverage</Text><Text>: Yes</Text></View>
        </View>
        <View style={styles.first}>
        <View style={styles.first1}><Text style={styles.first2}>Benefits</Text><Text>: As per benefit table</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>Journey from</Text><Text>: GREECE</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>PP/Country</Text><Text>: 31445 Antuillq</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>Payment Date</Text><Text>: 30 Apr 2024</Text></View>
        <View style={styles.first1}><Text style={styles.first2}>Payment Ref No</Text><Text>: 448697986</Text></View>
        </View>
      </View>
      <Text style={styles.txt}>Buy for yourself (This passport holder)</Text>
      <Text style={styles.txt}>This Certificate of Insurance confirms coverage for :</Text>
      <View style={styles.table}>
            <View style={styles.tableRowh}>
              <View style={styles.tableCell}><Text>Insured's Name</Text></View>
              <View style={styles.tableCell}><Text>Date of birth</Text></View>
              <View style={styles.tableCell}><Text>Age</Text></View>
              <View style={styles.tableCell}><Text>Insured Period</Text></View>
              <View style={styles.tableCell}><Text>Passport No</Text></View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}><Text>TEST</Text></View>
              <View style={styles.tableCell}><Text>2020-04-30</Text></View>
              <View style={styles.tableCell}><Text>30</Text></View>
              <View style={styles.tableCell}><Text>30 Days</Text></View>
              <View style={styles.tableCell}><Text>31445 Antuillq</Text></View>
            </View>
          </View>
          <Image style={styles.img4} src={img4}/>
          <Image style={styles.imgf3} src={img3}/>
          <Image style={styles.QRCode} src={QRCode}/>
          <Text style={styles.print}>Print Date:   30-11-2023</Text>
      {/* <Text render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`} fixed/> */}

      </View>
      <Image src={Screenshot1}/>
      <Image style={styles.img1} src={img1}/>
      <Text style={styles.print}>Print Date:   30-11-2023</Text>
    </Page>
    <Page>
      <View style={styles.page3}>
      <Image style={styles.img2} src={img2}/>
      <Image style={styles.image2} src={Images.logo} />
      </View>
      <Text style={styles.print}>Print Date:   30-11-2023</Text>
    </Page>
    <Page>
      <Image style={styles.s2} src={Screenshot2}/>
      <Text style={styles.print}>Print Date:   30-11-2023</Text>
    </Page>
    <Page>
    <Image style={styles.s2} src={Screenshot3}/>
    <Text style={styles.print}>Print Date:   30-11-2023</Text>
    </Page>
    <Page>
    <Image style={styles.s2} src={Screenshot4}/>
    <Text style={styles.print}>Print Date:   30-11-2023</Text>
    </Page>
    <Page>
    <Image style={styles.s2} src={Screenshot5}/>
      <Image style={styles.img4} src={img4}/>
      <Image style={styles.img3} src={img3}/>
      <Text style={styles.print}>Print Date:   30-11-2023</Text>
      </Page>
   </Document>
  )
}

export default PDFFile
