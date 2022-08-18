import React, { useState, useEffect } from "react";
import './whenGo.css';
import Appartment from './assets/icons/Appartment Moves.svg';
import Retail from './assets/icons/Retail Store Moves.svg';
import Furniture from './assets/icons/Furniture MOves.svg';
import Business from './assets/icons/Business Moves.svg';
import Time from './assets/icons/Time.svg';
import Vehicle from './assets/icons/Vehicle.svg';
import Location from './assets/icons/Location.svg';
import Phone from './assets/icons/Phone.svg';
import PaymentIcon from './assets/icons/Payment.svg'
// import Minus from './assets/icons/Minus.svg';

import HeroVango from './assets/illustrations/Hero-vango.svg';
import WorkWithUs from './assets/illustrations/Work with us.svg';
import AboutUs from './assets/illustrations/About us.svg';
import Contact from './assets/illustrations/Contact.svg';
import WhiteLogo from './assets/illustrations/logowhite.png';

import PlaceOrder from './assets/Images/Place order mockup1.png';
import CompleteOrder from './assets/Images/Complete Order.png';
import PaymentMockup from './assets/Images/Payment Mockup.png';
import OrderTracking from './assets/Images/Order Tracking.png';

import {Menu,
     Layout, 
     Typography, 
     Col, 
     Row, 
     Divider, 
     Image,
     Space,
     Button,
     Card,
     Tabs,
     Collapse,
     Input,
     Form,
     type,
    } from 'antd';

import { MinusOutlined } from '@ant-design/icons';
import { PlusOutlined, UserOutlined, MailFilled, MessageFilled, LinkedinFilled, TwitterOutlined, FacebookFilled, InstagramFilled  } from '@ant-design/icons';

const { Header } = Layout;
const {Title, Text, Link} = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { TextArea } = Input;

const items1 = [
    {
        label: 'Home',
        key: '1'
    },
    {
        label: 'Services',
        key: '2'
    },
    {
        label: 'Contact',
        key: '3'
    },
    {
        label: 'About Us',
        key: '4'
    }
];

function WhenGo(){
    const [icon, setIcon] = useState(false);
    const [icon2, setIcon2] = useState(true);
    const [icon3, setIcon3] = useState(true);
    const [icon4, setIcon4] = useState(true);
    const [tabPosition, setTabPosition] = useState('left');

    const onChange = (key) => {
        if(key.length === 0){
            setIcon(true);
            setIcon2(true);
            setIcon3(true);
            setIcon4(true);
        }
        else if(key.length > 0){
            key.map(a => {
                return (a[key.length-1] === '4')? setIcon4(!icon4): (a[key.length-1] === '3') ? setIcon3(!icon3) : (a[key.length-1] === '2')? setIcon2(!icon2) : (a[key.length-1] === '1')? setIcon(!icon) : ''
            })
        }
    };

    function resize() {
        if(window.innerWidth < 700){
            setTabPosition('top');
        } else {
            setTabPosition('left')
        }
      }
      
      window.onresize = resize;

    let sc = window.screen.width;
    useEffect(()=>{
        if(sc < 701){
            setTabPosition('top')
        }
    })

    const genExtra = () => (
        (icon)? <PlusOutlined style={{fontSize: '1.2rem'}}/> : <MinusOutlined style={{fontSize: '1.4rem', color: 'green'}}/>
    );
    const genExtra2 = () => (
        (icon2)? <PlusOutlined style={{fontSize: '1.2rem'}}/> : <MinusOutlined style={{fontSize: '1.4rem', color: 'green'}}/>
    );
    const genExtra3 = () => (
        (icon3)? <PlusOutlined style={{fontSize: '1.2rem'}}/> : <MinusOutlined style={{fontSize: '1.4rem', color: 'green'}}/>
    );
    const genExtra4 = () => (
        (icon4)? <PlusOutlined style={{fontSize: '1.2rem'}}/> : <MinusOutlined style={{fontSize: '1.4rem', color: 'green'}}/>
    );
    return (
        <>
            <div className="landing">
                <Header className="header">
                    <Menu 
                        mode="horizontal" 
                        items={items1} 
                        className='nav-menu'
                    />
                    <Title className="nav-title" >WhenGo</Title>
                </Header>

                <Row justify="space-around" align="middle" gutter={[24]}
                    style= {{width: '100%', marginLeft: '0px',  }}>

                    <Col xs= {21} sm = {22} md={10}>
                        <Title className="title color title-padding">Moving Every <br/>
                            Customer With Care
                        </Title>
                        <Text className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard
                        </Text>
                        <br/>
                        <br/>
                        <Space size={'large'}>
                            <Button shape="round" className="download-button button-color">
                                Download App
                            </Button>
                            <Button shape="round" className="download-button" style={{backgroundColor: '#d6d6d6'}} >
                                Become A Driver
                            </Button>
                        </Space>
                        <br/>
                    </Col>
                    
                    <Col xs={23} sm={24} md = {11} className='gutter-box' style={{paddingLeft: '40px', paddingRight: '40px', paddingTop: 10}}>
                        <Image className="image" height= 'auto' src= {HeroVango} />
                    </Col>
                </Row>
            </div>

            {/* ********* OUR SERVICES SECTION *********** */}
            <div className="div-spacing">
                <div className="position text-center services-title-text">
                    <Title className="title">Our Services</Title>
                    <Text className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </div>
                <div style={{width: '85%',margin: '0 auto'}}>
                    <Row gutter={[8, 8]} style= {{width: '100%', marginLeft: 0}}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card hoverable className="services-card">
                                <Space size={'small'} direction="vertical">
                                    <Image width={93} height={'auto'} src= {Retail}/>
                                    <Title level={4} className='card-title'>
                                        Retail Store Moves
                                    </Title>
                                    <div className="text-justify">
                                        <Text className="text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Text>
                                    </div>
                                </Space>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card hoverable className="services-card">
                                <Space direction="vertical">    
                                    <Image width={93} height={81} src={Appartment}/>
                                    <Title level={4} className='card-title'>
                                        Appartment Moves
                                    </Title>
                                    <div className="text-justify">
                                        <Text className="text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Text>
                                    </div>
                                </Space>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card hoverable className="services-card text-justify">
                                <Space direction="vertical">    
                                    <Image width={93} height={81} src={Furniture}/>
                                    <Title level={4} className='card-title' >
                                        Furniture Moves
                                    </Title>
                                    <Text className="text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Text>
                                    
                                </Space>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card hoverable className="services-card">
                                <Space direction="vertical">    
                                    <Image width={93} height={'auto'} src={Business}/>
                                    <Title level={4} className='card-title'>
                                        Business Moves
                                    </Title>
                                    <div className="text-justify">
                                        <Text className="text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Text>
                                    </div>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            
            {/* *********** Work With Us ************** */}

            <div className="div-spacing">
                <div className="position" style={{width: '80%'}}>
                    <Row gutter={[24]} justify="space-around" align="middle" >
                        <Col xs={24} sm={24} md={24} lg={11}>
                            <Image src={WorkWithUs}/>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} >
                                <Title className="work-title title">Work With Us</Title>
                                <Space direction="vertical" size='large'>
                                    <div className="text-justify">
                                        <Text className="text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </Text>
                                    </div>
                                    <Button shape="round" className="download-button button-color">
                                        Become A Driver
                                    </Button>
                            </Space>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* ************************ WHY CHOSE US ****************** */}
            <div className="background-color">
                <div className="position text-center services-title-text" style={{width: '70%'}}>
                    <Title className="title">Why Chose Us</Title>
                    <Text className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever
                    </Text>
                </div>
                <div className="position width">
                    <Row align="middle" gutter={[16, 16]}>
                        <Col xs={24} sm = {12} lg = {8}>
                            <Card className="services-card text-justify">
                                <Space direction="vertical" size={'large'}>
                                    <Image height={81} src={Vehicle}/>
                                    <Title level={5} className='card-title'>Loading into special chosen vehicle</Title>
                                </Space>
                                <br/>
                                <Text className="text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever
                                </Text>
                            </Card>
                        </Col>
                        <Col xs={24} sm = {12} lg = {8}>
                            <Card className="services-card text-justify">
                                <Space direction="vertical" size={'large'}>
                                    <Image height={81} src={Time}/>
                                    <Title level={5} className='card-title'>Save 50% off the cost of your moving</Title>
                                </Space>
                                <br/>
                                <Text className="text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever
                                </Text>
                            </Card>
                        </Col>
                        <Col xs={24} sm = {12} lg = {8}>
                            <Card className="services-card text-justify">
                                <Space direction="vertical" size={'large'}>
                                    <Image height={81} src={Vehicle}/>
                                    <Title level={5} className='card-title'>Book a ride at a time that suits you</Title>
                                </Space>
                                <br/>
                                <Text className="text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever
                                </Text>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* ********************************* HOW WANGO WORKS ****************************** */}
            <div className="div-spacing">
                <div className="width position">
                    <div className="text-center services-text position">
                        <Title className="title">
                            How VanGo Works
                        </Title>
                        <Text className="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever
                        </Text>
                    </div>
                    <Divider style={{border: 'none'}}/>
                    <Tabs tabPosition={tabPosition} centered >
                        <TabPane tab={'Place Order'}  key='1'>
                            <Row justify='space-around' align="middle">
                                <Col xs={6} sm={5} lg ={4}>
                                    <Image src={PlaceOrder} />
                                </Col>
                                <Col xs={17} sm={16} lg = {19}>
                                        <Title className="title">Place Order</Title>
                                        <div style={{ width: '90%', textAlign: 'justify' }}>
                                            <Text className="text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap
                                            </Text>
                                        </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab= {'Payment'} key='2'>
                        <Row justify='space-around' align="middle">
                                <Col xs={6} sm={5} lg ={4}>
                                    <Image src={PaymentMockup} />
                                </Col>
                                <Col xs={17} sm={16} lg = {19}>
                                        <Title className="title">Payment</Title>
                                        <div style={{ width: '90%', textAlign: 'justify' }}>
                                            <Text className="text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap
                                            </Text>
                                        </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab= 'Order Tracking' key='3'>
                        <Row justify='space-around' align="middle">
                                <Col xs={6} sm={5} lg ={4}>
                                    <Image src={OrderTracking} />
                                </Col>
                                <Col xs={17} sm={16} lg = {19}>
                                        <Title className="title">Order Tracking</Title>
                                        <div style={{ width: '90%', textAlign: 'justify' }}>
                                            <Text className="text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap
                                            </Text>
                                        </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab= 'Complete Order' key='4'>
                            <Row justify='space-around' align="middle">
                                    <Col xs={6} sm={5} lg ={4}>
                                        <Image src={CompleteOrder} />
                                    </Col>
                                    <Col xs={17} sm={16} lg = {19}>
                                            <Title className="title">Complete Order</Title>
                                            <div style={{ width: '90%', textAlign: 'justify' }}>
                                                <Text className="text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                    It has survived not only five centuries, but also the leap
                                                </Text>
                                            </div>
                                    </Col>
                                </Row>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
            <section className="div-spacing">
                <div  style={{width: '90%', margin: '0 auto'}}>
                    <Row justify="space-around" align="middle" >
                        <Col xs={24} sm={24} md={12} >
                            <Space direction="vertical" size='small'>
                                <Title className="title">About Us</Title>
                                <div className="text-justify">
                                    <Text className="text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority 
                                        have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </Text>
                                </div>
                            </Space>
                        </Col>
                        <Col xs={24} sm={24} md={11}>
                            <Image width={'98%'} src={AboutUs}/>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="background-color">
                <div className="position width-80">
                    <div className="text-center">
                        <Title className="title">Frequently Asked Questions</Title>
                    </div>
                    <Collapse defaultActiveKey={['1']} onChange={onChange} ghost >  
                        <Panel showArrow= {false} header="What type of vehicale you providing" key="1" extra={genExtra()} className="services-card question-card card-title color">
                            <Text className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                        </Panel>
                        <Panel showArrow = {false} header="How do i become a driver" key="2" extra={genExtra2()} className="services-card question-card card-title">
                            <Text className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                        </Panel>
                        <Panel showArrow = {false} header="How do i contact customer" key="3" extra={genExtra3()} className="services-card question-card card-title">
                            <Text className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                        </Panel>
                        <Panel showArrow = {false} header="How will my transport be inspected" key="4" extra={genExtra4()} className="services-card question-card card-title">
                            <Text className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                        </Panel>
                    </Collapse>
                </div>
            </section>
            {/* ********************************** GET IN TOUCH SECTION ********************************* */}
            <section className="div-spacing">
                <div style={{width: '90%', margin: '0 auto',}}>
                    <Row justify="space-around" align="middle" gutter={[24, 24]} >
                        <Col xs={24} sm={24} md={24} lg={11} >
                            <Image src={Contact} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} >
                            <div >    
                                <Title className="title">Get In Touch</Title>
                                <Text className="text">Lets Start Something New! Just ask get answers</Text>
                                <br/>
                                <br/>
                                <Form 
                                    layout="vertical"
                                    autoComplete="off"
                                    requiredMark='required'
                                    size = 'large'          
                                >
                                    <Form.Item
                                        label= 'Name'
                                        name="username"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                        ]}
                                        
                                    >
                                        <Input bordered= {false} size="large" prefix={<UserOutlined />} className='services-card text'/>
                                    </Form.Item>
                                    <Form.Item
                                        label='Email'
                                        name="email"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                        ]}
                                    >
                                        <Input bordered = {false} prefix={<MailFilled />} className='services-card text'/>
                                    </Form.Item>
                                    <Form.Item label= ' Message' >
                                        <TextArea placeholder="Write your message" bordered = {false} prefix={<MessageFilled />} className='services-card text'/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button className="download-button" style={{ backgroundColor: '#3b9850', borderRadius: '10px' ,color: 'white', width: '40%' }}>Send</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <div className="background-color">
                <div style={{width: '85%', margin: '0 auto', paddingTop: '45px'}}>
                    <Row justify="space-around" align="top" gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={6} className='text-center'>
                            <Image src={WhiteLogo}/>
                            <br/>
                            <br/>
                            <div className="text-justify ine-width position">
                                <Text className="text">We are experienced professional who understand that it services is changing, and are true partners who care about your futures success</Text>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={5} className="abled">
                            <Title level={2} >Links</Title>
                            <Space direction="vertical" className="links" style={{textAlign: 'left'}}>
                                <Link href= '#' target = '_blank' style={{color: 'black'}}>Home</Link>
                                <Link href= '#' target = '_blank' style={{color: 'black'}}>Services</Link>
                                <Link href= '#' target = '_blank' style={{color: 'black'}}>Our Products</Link>
                                <Link href= '#' target = '_blank' style={{color: 'black'}}>Our Team</Link>
                            </Space>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={7} className='text-center'>
                            <Space direction="vertical">
                                <Title level={2}>Contact Us</Title>
                                <div>
                                    <Space>
                                        <Image width={20} src={Location} />
                                        <Text className="text">Office#203 cubator lne Park Road,<br/>
                                            Comsats university Islamabad,<br/>
                                            Punjab, Pakistan-46000
                                        </Text>
                                    </Space>
                                </div>
                                <div>
                                    <Space>
                                        <Image width={20} src={Phone}/>
                                        <Text className="text">Phone # 0992-3115457849</Text>
                                    </Space>
                                </div>
                            </Space>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} className="text-center">
                            <Title level={2} >Follow Us</Title>
                            <Space size={'large '}>
                                <TwitterOutlined style={{fontSize: '20px', color: '#3b9850', marginRight: 10}}/>
                                <LinkedinFilled style={{fontSize: '20px', color: '#3b9850', marginRight: 10}}/>
                                <InstagramFilled style={{fontSize: '20px', color: '#3b9850', marginRight: 10}}/>
                                <FacebookFilled style={{fontSize: '20px', color: '#3b9850', marginRight: 10}}/>
                            </Space>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default WhenGo;