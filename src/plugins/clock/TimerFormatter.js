/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2021, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
momentDurationFormatSetup(moment);

class TimerFormatter {
    constructor() {
        this.SHORT_FORMAT = "HH:mm:ss";
        this.LONG_FORMAT = "d[D] HH:mm:ss";
    }

    toWholeSeconds(duration) {
        return Math.abs(Math.floor(duration / 1000) * 1000);
    }

    getShortValue(duration) {
        return moment.duration(this.toWholeSeconds(duration), 'ms')
            .format(this.SHORT_FORMAT, { trim: false });
    }

    getLongValue(duration) {
        return moment.duration(this.toWholeSeconds(duration), 'ms')
            .format(this.LONG_FORMAT, { trim: false });
    }
}

return TimerFormatter;