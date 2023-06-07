export default function getMonth(number){
 let name = null;
switch(number){
  case '01':
       name = 'January'
       break;
    case '02':
      name = 'February'
      break;
    case '03':
      name =  'March'
      break;
      case '04':
        name = 'April'
        break;
     case '05':
       name = 'May'
       break;
     case '06':
       name =  'June'
       break;    
       case '07':
        name =  'July'
        break; 
        case '08':
          name =  'August'
        break; 
        case '09':
          name =  'September'
          break; 
          case '10':
            name =  'October'
            break; 
      case '11':
        name =  'November'
        break; 
      case '12':
        name =  'December'
        break; 
      case 'co':
      name = 'cover'
        break;
      default:
        name =  ''
  }
  return name
}
