import { Fragment, useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Includes/Header'
import Footer from './Components/Includes/Footer'
import Test from './Components/Test/Test'
import TestDetails from './Components/Containers/TestDetails'
import CartList from './Components/Containers/CartList'
import AlertBox from './AlertBox'
import GuestCheckOut from './Components/Containers/GuestCheckOut'
import Login from './Components/Containers/Login'
import OtpLogin from './Components/Containers/OtpLogin'
import VerifyLogin from './Components/Containers/VerifyLogin'
import Register from './Components/Containers/Register'

// -------------------------------------------------------//

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Peoplebhind from './Components/Peoplebehind/Peoplebehind'
import History from './Components/History/History'
import Commitment from './Components/Commitment/Commitment'
import Accreditation from './Components/Accreditation/Accreditation'
import PatientsConsumers from './Components/PatientsConsumers/PatientsConsumers'
import Packages from './Components/Packages/Packages'
import PackagesAds from './Components/PackagesAds/PackagesAds'
import Loader from './Components/Loader/Loader'
import HealthPackages from './Components/HealthPackages/HealthPackages'
import PreparingForHeathCheckup from './Components/PreparingForHeathCheckup/PreparingForHeathCheckup'
import DriveThroughBloodCollection from './Components/DriveThroughBloodCollection/DriveThroughBloodCollection'
import Feedback from './Components/Feedback/Feedback'
import Faq from './Components/Faq/Faq'
import BookanAppointment from './Components/BookanAppointment/BookanAppointment'
import Department from './Components/Department/Department'
import HospitalLabManagement from './Components/HospitalLabManagement/HospitalLabManagement'
import ClinicalLabManagement from './Components/ClinicalLabManagement/ClinicalLabManagement'
import FranchisingOpportunities from './Components/FranchisingOpportunities/FranchisingOpportunities'
import Research from './Components/Research/Research'
import Physiotherapy from './Components/Physiotherapy/Physiotherapy'
import ManualTherapy from './Components/ManualTherapy/ManualTherapy'
import ExerciseTherapy from './Components/ExerciseTherapy/ExerciseTherapy'
import Electrotherapy from './Components/Electrotherapy/Electrotherapy'
import Contact from './Components/Contact/Contact'
import HeadOffice from './Components/HeadOffice/HeadOffice'
import AnandLabFranchise from './Components/AnandLabFranchise/AnandLabFranchise'
import CovidtestingforEmployees from './Components/CovidtestingforEmployees/CovidtestingforEmployees'
import HealthCheckupforEmployees from './Components/HealthCheckupforEmployees/HealthCheckupforEmployees'
import CaptainHealthCheck from './Components/CaptainHealthCheck/CaptainHealthCheck'
import Careers from './Components/Careers/Careers'
import Career from './Components/Career/Career'
import MyProfile from './Components/MyProfile/MyProfile'
import FindLab from './Components/FindLab/FindLab'
import ThankYou from './Components/ThankYou/ThankYou'
import AnandThankYou from './Components/ThankYou/AnandThankYou'

import CancellationPolicy from './Components/CancellationPolicy/CancellationPolicy'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from './Components/TermsConditions/TermsConditions'
import AnandatHome from './Components/AnandatHome/AnandatHome'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, setTestLocation } from './Redux/Actions/TestAction'
import "react-datepicker/dist/react-datepicker.css";
import ForgotPassword from './Components/Containers/ForgotPassword'
import ResetPassword from './Components/Containers/ResetPassword'
import { QueryClient, QueryClientProvider } from 'react-query'
import FloatingForm from './Components/FloatingForm'
import AuthRoutes from './Components/AuthRoutes'
import Reports from './Components/Reports'
import ReportAccount from './Components/ReportAccount'
import CallToAction from './Components/CallToAction'
import FeedbackB2B from './Components/Feedback/FeedbackB2B'
import AnandatHomeNipt from './Components/AnandatHomeNipt/AnandatHomeNipt'
import NIPT from './Components/NIPT/NIPT'
import AllergyTesting from './Components/AllergyTesting/AllergyTesting'
import LabShivajiNagarBranch from './Components/LabShivajiNagarBranch/LabShivajiNagarBranch'
import VitaminTesting from './Components/VitaminTesting/VitaminTesting'
import DiabetesLipidProfile from './Components/DiabetesLipidProfile/DiabetesLipidProfile'
import CbcElectrolytesEtc from './Components/CbcElectrolytesEtc/CbcElectrolytesEtc'
import KftCreatinineThyroid from './Components/KftCreatinineThyroid/KftCreatinineThyroid'
import ArthritisPackage from './Components/ArthritisPackage/ArthritisPackage'
import NeubergAnand50Years from './Components/NeubergAnand50Years/NeubergAnand50Years'
import MothersDay from './Components/MothersDay/MothersDay'

export default function App() {
  const dispatch = useDispatch();
  const ref = useRef();
  const loader = useSelector((state) => state.Loader);
  var TestLocation = localStorage.getItem('TestLocation')
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [])
  useEffect(() => {
    if (TestLocation === null) {
      localStorage.setItem('TestLocation', 'bangalore')
      dispatch(setTestLocation('bangalore'));
    } else {
      dispatch(setTestLocation(TestLocation));
    }
  }, [])
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        {loader.status === true ? <Loader /> : null}
        <Header />
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path='/checkout' exact element={<GuestCheckOut />} />
            <Route path="/my-account" element={<MyProfile />} />
            <Route path='/payment-sucess' element={<ThankYou />} />
          </Route>
          <Route path='/anand-at-home-thank-you' element={<AnandThankYou />} />
          <Route path='/thank-you' element={<AnandThankYou />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/reports/account' element={<ReportAccount />} />
          <Route path='/my-cart' element={<CartList />} />
          <Route path='/reset-password/:customer_id' element={<ResetPassword />} />
          <Route path='/for-patient' element={<Test />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/login-with-otp' exact element={<OtpLogin />} />
          <Route path='/verify-otp' exact element={<VerifyLogin />} />
          <Route path='/forgot-password' exact element={<ForgotPassword />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/test/:TestId' exact element={<TestDetails />} />
          <Route path='/package/:TestId' exact element={<TestDetails />} />
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/people-behind' element={<Peoplebhind />} />
          <Route path='/history' element={<History />} />
          <Route path='/commitment' element={<Commitment />} />
          <Route path='/accreditation' element={<Accreditation />} />
          <Route path='/patients-consumers' element={<PatientsConsumers />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/packages-ads' element={<PackagesAds />} />
          <Route path='/health-packages' element={<HealthPackages />} />
          <Route path='/preparing-for-health-checkup' element={<PreparingForHeathCheckup />} />
          <Route path='/drive-through-blood-collection' element={<DriveThroughBloodCollection />} />
          <Route path='/feedback' element={<FeedbackB2B />} />
          <Route path='/feedback-b2b' element={<Feedback />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/book-an-appointment' element={<BookanAppointment />} />
          <Route path='/department' element={<Department />} />
          <Route path='/hospital-or-lab-management' element={<HospitalLabManagement />} />
          <Route path='/clinical-lab-management' element={<ClinicalLabManagement />} />
          <Route path='/franchising-opportunities' element={<FranchisingOpportunities />} />
          <Route path='/research' element={<Research />} />
          <Route path='/physiotherapy' element={<Physiotherapy />} />
          <Route path='/manual-therapy' element={<ManualTherapy />} />
          <Route path='/exercise-therapy' element={<ExerciseTherapy />} />
          <Route path='/electrotherapy' element={<Electrotherapy />} />
          <Route path='/reach-us' exact element={<Contact />} />
          <Route path='/head-office' exact element={<HeadOffice />} />
          <Route path='/healthcheckup-for-employees' exact element={<HealthCheckupforEmployees />} />
          <Route path='/captains-health-check' exact element={<CaptainHealthCheck />} />
          <Route path='/nipt' exact element={<NIPT />} />
          <Route path='/allergy-testing' exact element={<AllergyTesting />} />
          <Route path='/anand-diagnostic-laboratory-shivajiangar-branch' exact element={<LabShivajiNagarBranch />} />
          <Route path='/vitamin-testing' exact element={<VitaminTesting />} />
          <Route path='/diabetes-lipid-profile' exact element={<DiabetesLipidProfile />} />
          <Route path='/cbc-electrolytes-etc' exact element={<CbcElectrolytesEtc />} />
          <Route path='/kft-creatinine-thyroid' exact element={<KftCreatinineThyroid />} />
          <Route path='/anand-at-home' exact element={<AnandatHome />} />
          <Route path='/anand-at-home-nipt' exact element={<AnandatHomeNipt />} />
          <Route path='/careers' exact element={<Careers />} />
          <Route path='/join-oppourtunities/:id' exact element={<Career />} />
          <Route path='/anandlab-franchise' exact element={<AnandLabFranchise />} />
          <Route path='/covidtesting-employees' exact element={<CovidtestingforEmployees />} />
          <Route path='/covidtesting-employees' exact element={<CovidtestingforEmployees />} />
          <Route path='/find-lab' exact element={<FindLab />} />
          <Route path='/cancellation-policy' exact element={<CancellationPolicy />} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' exact element={<TermsConditions />} />
          <Route path='/arthritis-package' exact element={<ArthritisPackage />} />
          <Route path='/neuberg-anand-50-years' exact element={<NeubergAnand50Years />} />
          <Route path='/neuberg-anand-mothers-day' exact element={<MothersDay />} />
        </Routes>
        <Footer />
        <AlertBox />
        <FloatingForm />
        <CallToAction />
      </Fragment>
    </QueryClientProvider>
  )
}