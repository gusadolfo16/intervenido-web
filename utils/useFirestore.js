import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/firebaseConfig';

const useFirestore = (collection) 